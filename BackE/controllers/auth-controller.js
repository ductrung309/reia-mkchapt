import User from "../model/user-model.js";

export const signup = async (req, res) => {
  try {
    const { fullname, username, password, confirmPassword, gender } = req.body;

    //Kiểm tra tính hợp lệ của mật khẩu
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Password do not match!!" });
    }

    //Kiểm tra tài khoản người dùng
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    //Hàm băm

    //Avatar
    const avatar = `https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=${fullname}`;
    const newUser = new User({
      fullname,
      username,
      password,
      gender,
      avatar: avatar,
    });
    await newUser.save();

    res.status(201).json({
      _id: newUser._id,
      fullname: newUser.fullname,
      username: newUser.username,
      avatar: newUser.avatar,
    });
  } catch (error) {
    console.log("Error log", error.message);
    res.status(500).json({ error: "Server error" });
  }
};
