import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import Student from "../models/Student";
import Task from "../models/Task";
import { ApiError } from "../utils/ApiError";

export const addStudent = async (req: Request, res: Response) => {
  const { name, email, password, department } = req.body;

  const exists = await Student.findOne({ email });
  if (exists) throw new ApiError(400, "Student already exists");

  const hashed = await bcrypt.hash(password, 10);

  const student = await Student.create({
    name,
    email,
    password: hashed,
    department
  });

  res.status(201).json({ success: true, student });
};

export const assignTask = async (req: any, res: Response) => {
  const { studentId, title, description, dueDate } = req.body;

  const task = await Task.create({
    student: studentId,
    title,
    description,
    dueDate,
    assignedBy: req.user.id
  });

  res.status(201).json({ success: true, task });
};
