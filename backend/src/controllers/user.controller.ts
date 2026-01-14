import { Request, Response } from "express";
import * as userService from "../services/user.service";
import { createToken } from "../services/auth.service";

export const checkUser = async (req: Request, res: Response): Promise<Response> => {
  const { email } = req.query;

  if (!email || typeof email !== "string") {
    return res.status(400).json({ error: "Email requerido" });
  }

  const exists = await userService.userExists(email);
  return res.json({ exists });
};

export const getName = async (req: Request, res: Response) => {
  try {

    if (!req.user) {
      return res.status(401).json({ error: "No autorizado" });
    }

    const name = await userService.getUserName(req.user.id);
    return res.json({ name });

  } catch (err: any) {
    console.error(err);

    if (err.status) {
      return res.status(err.status).json({ error: err.message });
    }

    return res.status(500).json({ error: "Error interno" });
  }
};
export const hello = async (_req: Request, res: Response): Promise<Response> => {

  return res.json("hello");
};

export const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await userService.validateLogin(email, password);
  if (!user) {
    return res.status(401).json({ error: "Credenciales inválidas" });
  }

  const token = createToken(user.id);

  return res.status(200).json({ token });
};

export const register = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: "Datos incompletos" });
    }

    // password YA viene hasheada desde el middleware
    const user = await userService.registerUser(
      name,
      email,
      password
    );

    return res.status(201).json({
      id: user.id,
      name: user.name,
      email: user.email
    });
  } catch (err: any) {
    console.error(err);

    if (err.status) {
      return res.status(err.status).json({ error: err.message });
    }

    return res.status(500).json({ error: "Error interno" });
  }
};
