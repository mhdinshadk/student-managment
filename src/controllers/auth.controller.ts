import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Admin from "../models/Admin";
import Student from "../models/Student";
import { ApiError } from "../utils/ApiError";

const generateToken = (payload: any) => {
  return jwt.sign(payload, process.env.JWT_SECRET as string, {
    expiresIn: "7d"
  });
};

export const adminLogin = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const admin = await Admin.findOne({ email });
  if (!admin || !admin.password) throw new ApiError(404, "Admin not found");

  const match = await bcrypt.compare(password, admin.password);
  if (!match) throw new ApiError(401, "Invalid credentials");

  const token = generateToken({ id: admin._id, role: "admin" });

  res.json({ success: true, token });
};

export const studentLogin = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const student = await Student.findOne({ email });
  if (!student || !student.password) throw new ApiError(404, "Student not found");

  const match = await bcrypt.compare(password, student.password);
  if (!match) throw new ApiError(401, "Invalid credentials");

  const token = generateToken({ id: student._id, role: "student" });

  res.json({ success: true, token });
};
