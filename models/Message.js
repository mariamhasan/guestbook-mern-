const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  receiver: { type: String, required: true },
  messageBody: { type: String, required: true }
});

module.exports = Message = mongoose.model("message", messageSchema);
