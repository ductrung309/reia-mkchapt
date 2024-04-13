import jwt from "jsonwebtoken";

const genTokenAndSetCookie = (userID, res) => {
  const token = jwt.sign({ userID }, process.env.JWT_SECRET, {
    expiresIn: "364d",
  });

  res.cookie("jwt", token, {
    maxAge: 364 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "development",
  });
};

export default genTokenAndSetCookie;
