export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id } = req.params;
    const senderID = req.userID;
  } catch (error) {
    console.log("ERROR WHILE SENDING THE MESSAGE!!!", error.message);
    res.status(500).json({ error: "Server error" });
  }
};
