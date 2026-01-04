// middlewares/comparePassword.middleware.ts
import { Request, Response, NextFunction } from "express";

export const requireEmailAndPassword = (req: Request, res: Response, next: NextFunction) => {
  if (!req.body.email || !req.body.password) {
    res.status(400).json({ error: "Datos incompletos" });
    return;
  }
  next();
};