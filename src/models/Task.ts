import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    dueDate: Date,
    status: {
      type: String,
      enum: ["pending", "overdue", "completed"],
      default: "pending"
    },
    student: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
    assignedBy: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" }
  },
  { timestamps: true }
);

export default mongoose.model("Task", taskSchema);
