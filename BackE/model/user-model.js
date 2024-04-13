import mongoose, { Types } from "mongoose";

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  gender: {
    type: String,
    required: true,
    enum: ["Nam", "Nữ"],
  },
  avatar: {
    type: String,
    default: "",
  },
});

const User = mongoose.model("People", userSchema);

export default User;
