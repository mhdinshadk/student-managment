import { Response } from "express";
import Task from "../models/Task";
import { ApiError } from "../utils/ApiError";

export const getMyTasks = async (req: any, res: Response) => {
  const tasks = await Task.find({ student: req.user.id });

  res.json({ success: true, tasks });
};

export const updateTaskStatus = async (req: any, res: Response) => {
  const { status } = req.body;

  const task = await Task.findOne({
    _id: req.params.taskId,
    student: req.user.id
  });

  if (!task) throw new ApiError(404, "Task not found");

  task.status = status;
  await task.save();

  res.json({ success: true, task });
};
