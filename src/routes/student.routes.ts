import { Router } from "express";
import { getMyTasks, updateTaskStatus } from "../controllers/student.controller";
import { protect } from "../middleware/auth.middleware";

const router = Router();

router.use(protect(["student"]));

router.get("/tasks", getMyTasks);
router.patch("/tasks/:taskId", updateTaskStatus);

export default router;
