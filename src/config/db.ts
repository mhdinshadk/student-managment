import mongoose from "mongoose";
import process from "process";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("DB Error", error);
    process.exit(1);
  }
};
