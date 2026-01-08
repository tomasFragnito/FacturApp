// middlewares/comparePassword.middleware.ts
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const requireEmailAndPassword = (req: Request, res: Response, next: NextFunction) => {
  if (!req.body.email || !req.body.password) {
    res.status(400).json({ error: "Datos incompletos" });
    return;
  }
  next();
};

export const authJwt = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(401).json({ error: "Token requerido" });
    return;
  }

  const [type, token] = authHeader.split(" ");

  if (type !== "Bearer" || !token) {
    res.status(401).json({ error: "Formato de token inválido" });
    return;
  }

  try {
    const payload = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as { userId: number };

    req.user = { id: payload.userId };
    next();
  } catch {
    res.status(401).json({ error: "Token inválido" });
    return;
  }
};