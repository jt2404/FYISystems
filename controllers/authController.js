const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
require('dotenv').config();

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await User.create({ name, email, password: hashedPassword });
    return res.handler.response(
      STATUS_CODES.SUCCESS,
      STATUS_MESSAGES.LOGIN_SUCCESS,
      {
        user: newUser 
      }
    );

  } catch (err) {
    return res.handler.response(STATUS_CODES.SERVER_ERROR);
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
    
    const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
    return res.handler.response(
      STATUS_CODES.SUCCESS,
      STATUS_MESSAGES.LOGIN_SUCCESS,
      {
        token, user 
      }
    );

  } catch (err) {
     return res.handler.response(STATUS_CODES.SERVER_ERROR);
  }
};


exports.generateTokenForUser = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    const resetLink = `${process.env.FORTEND_URL}${token}`;   

    return res.handler.response(
      STATUS_CODES.SUCCESS,
      STATUS_MESSAGES.REQUEST.ADDED,
      resetLink,
    );

  } catch (err) {
    return res.status(500).json({ message: 'Server error', error: err.message });
  }
};


exports.updatePassword = async (req, res) => {
  const { token, newPassword } = req.body;

  if (!token || !newPassword) {
    return res.status(400).json({ message: 'Token and new password are required' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const hashedPassword = await bcrypt.hash(newPassword, 10); 

    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.password = hashedPassword; 
    await user.save();

    return res.handler.response(
      STATUS_CODES.SUCCESS,
      STATUS_MESSAGES.PASSWORD.CHANGED,
    );
  } catch (err) {
    return res.status(400).json({ message: 'Invalid or expired token', error: err.message });
  }
};

exports.forgotPassword  = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Generate random 8 character password
    const newPassword = crypto.randomBytes(4).toString('hex'); // 8 characters

    // Hash the password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update user password
    user.password = hashedPassword;
    await user.save();

    // Setup nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // or your email service
      auth: {
        user:process.env.EMAIL_USER,
        pass:  process.env.EMAIL_PASS, // use app password or env var
      },
    });

    // Send email
    await transporter.sendMail({
      from: '"Minimal UI" <your-email@gmail.com>',
      to: email,
      subject: 'Password Reset',
      html: `<h3>Your new password: ${newPassword}</h3><p>Thank You</p>`,
    });

    return res.status(200).json({ message: 'New password sent to your email.' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
