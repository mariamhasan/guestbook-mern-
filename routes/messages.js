const express = require("express");
const messages = express.Router();
const cors = require("cors");
const Message = require("../models/Message");

messages.use(cors());

messages.get("/", async (req, res) => {
  Message.find()
    .then(messages => res.json(messages))
    .catch(err => res.status(400).json("Error: " + err));
});

messages.post("/add", async (req, res) => {
  let { receiver, messageBody } = req.body;

  const newMessage = new Message({
    receiver,
    messageBody
  });

  newMessage
    .save()
    .then(() => res.json("Message added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

messages.get("/:id", async (req, res) => {
  Message.findById(req.params.id)
    .then(message => res.json(message))
    .catch(err => res.status(400).json("Error: " + err));
});

messages.delete("/delete/:id", async (req, res) => {
  Message.findByIdAndDelete(req.params.id)
    .then(() => res.json("Exercise deleted."))
    .catch(err => res.status(400).json("Error: " + err));
});

messages.post("/update/:id", async (req, res) => {
  Message.findById(req.params.id)
    .then(message => {
      message.receiver = req.body.receiver;
      message.messageBody = req.body.messageBody;

      message
        .save()
        .then(() => res.json("Exercise updated!"))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = messages;
