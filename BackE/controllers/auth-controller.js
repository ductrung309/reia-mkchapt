import User from "../model/user-model.js";
import bcrypt from "bcryptjs";
import genTokenAndSetCookie from "../UT/genToken.js";

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

    //Hàm băm mật khẩu
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    //JSON
    const avatar = `https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=${fullname}`;
    const newUser = new User({
      fullname,
      username,
      password: hashPassword,
      gender,
      avatar: avatar,
    });

    if (newUser) {
      //GENERATION JWT TOKE
      genTokenAndSetCookie(newUser._id, res);

      //Lưu
      await newUser.save();

      //Người dùng mới được thêm vào db
      res.status(201).json({
        _id: newUser._id,
        fullname: newUser.fullname,
        username: newUser.username,
        avatar: newUser.avatar,
      });
    } else {
      res.status(400).json({ error: "Invalid user data!" });
    }
  } catch (error) {
    console.log("Error signin", error.message);
    res.status(500).json({ error: "Server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    //So sánh tài khoản trong db
    const user = await User.findOne({ username });
    const isPasswordcorrect = await bcrypt.compare(
      password,
      user.password || ""
    );
    if (!user || isPasswordcorrect) {
      return res.status(400).json({ error: "Invalid username or password!" });
    }

    //check lại cookie
    genTokenAndSetCookie(user._id, res);

    //nhận lại JSON
    res.status(200).json({
      _id: user._id,
      fullname: user.fullname,
      username: user.username,
      avatar: user.avatar,
    });
  } catch (error) {
    console.log("Error login", error.message);
    res.status(500).json({ error: "Server error" });
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logout successfully" });
  } catch (error) {
    console.log("Error logout", error.message);
    res.status(500).json({ error: "Server error" });
  }
};
