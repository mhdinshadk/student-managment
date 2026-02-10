import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, unique: true },
    password: String,
    department: String
  },
  { timestamps: true }
);

export default mongoose.model("Student", studentSchema);
