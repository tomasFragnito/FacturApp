import { Request, Response } from "express";
import * as userService from "../services/user.service";

export const checkUser = async (req: Request, res: Response): Promise<Response> => {
  const { email } = req.query;

  if (!email || typeof email !== "string") {
    return res.status(400).json({ error: "Email requerido" });
  }

  const exists = await userService.userExists(email);
  return res.json({ exists });
};