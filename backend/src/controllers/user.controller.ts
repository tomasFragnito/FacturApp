import { Request, Response } from "express";
import * as userService from "../services/user.service.js";

export const checkUser = async (req: Request, res: Response): Promise<Response> => {
  const { email } = req.query;

  if (!email || typeof email !== "string") {
    return res.status(400).json({ error: "Email requerido" });
  }

  const exists = await userService.userExists(email);
  return res.json({ exists });
};

export const login = async (req: Request, res: Response): Promise<Response> => {
  const { email } = req.query;

  if (!email || typeof email !== "string") {
    return res.status(400).json({ error: "Email requerido" });
  }

  const exists = await userService.userExists(email);

  res.redirect("/index.html");
   
  return res.json({ exists });
};

export const register = async (req: Request, res: Response): Promise<Response | void> => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Datos incompletos' });
    }

    const user = await userService.registerUser(name, email, password);
    return res.status(201).json(user);
  } catch (err) {
    console.error(err);
  }
};

export const hello = async (_req: Request, res: Response): Promise<Response | void> => {
  try {
    console.log("OK")
    return res.status(200);
  } catch (err) {
    console.error(err);
  }
};