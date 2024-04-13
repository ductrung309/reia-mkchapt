import Conversation from "../model/conversation-model.js";
import Message from "../model/message-model.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverID } = req.params;
    const senderID = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderID, receiverID] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderID, receiverID],
      });
    }

    const newMessage = new Message({
      senderID: senderID,
      receiverID: receiverID,
      message: message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    await Promise.all([conversation.save(), newMessage.save()]);

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("ERROR WHILE SENDING THE MESSAGE!!!", error.message);
    res.status(500).json({ error: "Server error" });
  }
};

export const getMessage = async (req, res) => {
  try {
    const { id: userToChatID } = req.params;
    const senderID = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderID, userToChatID] },
    }).populate("messages");

    res.status(200).json(conversation.messages);
  } catch (error) {
    console.log("ERROR WHILE GETTING THE MESSAGE!!!", error.message);
    res.status(500).json({ error: "Server error" });
  }
};
