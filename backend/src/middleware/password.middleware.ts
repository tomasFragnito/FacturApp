import { Request, Response, NextFunction } from "express";
import * as passwordService from "../services/password.service";

export const hashPasswordMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { password } = req.body;

  if (!password) {
    res.status(400).json({ error: "Contraseña requerida" });
    return;
  }

  try {
    req.body.password = await passwordService.hashPassword(password);
    next();
  } catch (err) {
    res.status(500).json({ error: "Error al procesar contraseña" });
  }
};
