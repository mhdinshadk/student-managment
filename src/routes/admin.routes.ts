import { Router } from "express";
import { addStudent, assignTask } from "../controllers/admin.controller";
import { protect } from "../middleware/auth.middleware";

const router = Router();

router.use(protect(["admin"]));

router.post("/students", addStudent);
router.post("/tasks", assignTask);

export default router;
