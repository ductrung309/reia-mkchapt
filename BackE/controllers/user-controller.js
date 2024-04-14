import User from "../model/user-model.js";

export const getUserForSidebar = async (req, res) => {
  try {
    const logInUserID = req.user._id;
    const allUsers = await User.find({ _id: { $ne: logInUserID } });

    res.status(200).json(allUsers);
  } catch (error) {
    console.log("User controller error!!");
    res.status(500).json({ error: "Server error!!" });
  }
};
