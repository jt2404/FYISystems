const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  fullname: { type: String},
  email: { type: String},
  phone: { type: String },
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
  appointmentDate: { type: Date },
});

module.exports = mongoose.model('Feedback', feedbackSchema);
