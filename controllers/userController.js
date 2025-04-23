const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
const FinancialAdvisor = require("../models/financialAdvisorModel");
exports.updateUserProfile = async (req, res) => {
  try {
    const userId = req.params.id; // assuming JWT auth middleware sets req.user
    const { name, email, contact, role } = req.body;
    const profile = req.file ? `uploads/${req.file.filename}` : undefined;
    console.log(contact);
    const updateFields = { name, email, role, contact };
    if (contact) updateFields.contact = contact;
    if (profile) updateFields.profile = profile;

    const updatedUser = await User.findByIdAndUpdate(userId, updateFields, {
      new: true,
    });

    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      data: updatedUser,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.handler.response(
      STATUS_CODES.SUCCESS,
      STATUS_MESSAGES.REQUEST.LIST,
      users
    );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    return res.handler.response(
      STATUS_CODES.SUCCESS,
      STATUS_MESSAGES.REQUEST.LIST,
      user
    );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const updates = { ...req.body };

    if (updates.password) {
      updates.password = await bcrypt.hash(updates.password, 12);
    }

    const updatedUser = await User.findByIdAndUpdate(req.params.id, updates, {
      new: true,
    });

    return res.handler.response(
      STATUS_CODES.SUCCESS,
      STATUS_MESSAGES.REQUEST.UPDATED,
      updatedUser
    );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const Users = await User.findById(req.params.id);

    const FinancialAdvisors = await FinancialAdvisor.findOne({
      _id: Users.FinancialAdvisorid,
    });

    if (FinancialAdvisors) {
      await FinancialAdvisor.findByIdAndDelete(FinancialAdvisors._id);
    }

    await User.findByIdAndDelete(req.params.id);

    return res.handler.response(
      STATUS_CODES.SUCCESS,
      STATUS_MESSAGES.REQUEST.DELETED
    );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
