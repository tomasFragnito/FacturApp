import { Request, Response } from "express";
import * as userService from "../services/user.service.js";


export const logsin = async (req: Request, res: Response): Promise<Response> => {
  const { email, password } = req.body;

  if (!email || !password || typeof email !== "string" || typeof password !== "string") {
    console.error("Faltan credenciales en el cuerpo de la solicitud (req.body)");
    return res.status(400).json({ error: "Email y contraseña son obligatorios." });
  }

  try {

    // Esta función DEBE verificar el email y HASH de la contraseña.
    //const user = await userService.authenticateUser(email, password); // <- Asumimos que creaste esta función

    //if (!user) {
      // Si las credenciales no coinciden (email existe pero pass es incorrecto, o email no existe)
      //return res.status(401).json({ error: "Credenciales inválidas" });
    //}

    return res.status(200).json({ 
      message: "Login exitoso",
    });

  } catch (error) {
    console.error("Error durante el login:", error);
    return res.status(500).json({ error: "Error interno del servidor." });
  }
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