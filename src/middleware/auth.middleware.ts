import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { ApiError } from "../utils/ApiError";

export interface AuthRequest extends Request {
  user?: any;
}

export const protect = (roles: string[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) throw new ApiError(401, "Token missing");

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
      req.user = decoded;
      if (!roles.includes(req.user.role)) {
        throw new ApiError(403, "Forbidden");
      }
      next();
    } catch {
      throw new ApiError(401, "Invalid token");
    }
  };
};
