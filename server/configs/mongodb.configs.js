import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Database connected");
    });
    await mongoose.connect(`${process.env.MONGODB_URI}/carrentalwebapp`);
  } catch (error) {
    console.log("Database connection failed" + error);
  }
};

export default connectDB;
