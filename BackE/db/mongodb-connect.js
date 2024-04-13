import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Connect to database");
  } catch (error) {
    console.log("Error connect to database!!", error.message);
  }
};

export default connectMongoDB;
