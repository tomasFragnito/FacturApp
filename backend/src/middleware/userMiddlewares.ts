import { User } from "../models/user.model.js";
import { Request, Response, NextFunction } from "express";

export const loadUser = async (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
        res.status(404).json({ ok: false, mensaje: "usuario no encontrado" });
        return;
    }


    req.user = {
      password: user.password,
      iv: user.iv,
      authTag: user.authTag
    };

    next();

  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false, error: "Error en middleware" });
  }
};