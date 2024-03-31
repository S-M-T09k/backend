const mongoose = require('mongoose');

const reqMessageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: Number,
  message: String,
  messageIncluded: {
    type: Boolean,
    required: true
  }
}, { timestamps: true });

const RequestMessage = mongoose.model('requestMessages', reqMessageSchema);

module.exports = RequestMessage;
