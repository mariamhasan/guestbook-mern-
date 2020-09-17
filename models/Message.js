const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  to: { type: String, required: true },
  createdAt: { type: Date },
  messageBody: { type: String, required: true }
});

module.exports = Message = mongoose.model("message", messageSchema);
