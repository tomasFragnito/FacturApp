import crypto from "crypto";
import { Request, Response, NextFunction } from "express";

function getKey(): Buffer {
  const code = process.env.CODE_AES;

  if (!code) {
    throw new Error("CODE_AES no está definida");
  }

  if (!/^[0-9a-fA-F]{64}$/.test(code)) {
    throw new Error("CODE_AES debe ser HEX de 64 caracteres");
  }

  return Buffer.from(code, "hex");
}


export const encodedPassword = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const KEY = getKey();
    const { password } = req.body;

    if (!password) {
      res.status(400).json({ ok: false, message: "Falta password" });
      return;
    }

    const iv = crypto.randomBytes(12);
    const cipher = crypto.createCipheriv("aes-256-gcm", KEY, iv);

    let encoded = cipher.update(password, "utf8", "hex");
    encoded += cipher.final("hex");

    const authTag = cipher.getAuthTag();

    req.encodedPassword = {
      encoded,
      iv: iv.toString("hex"),
      authTag: authTag.toString("hex")
    };

    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false, message: "Error en encriptación" });
  }
};

export const decodedPassword = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const KEY = getKey();
    const { user } = req;
    const { password } = req.query;

    if (!password) {
      res.status(400).json({ ok: false, mensaje: "Falta password" });
      return;
    }
    if (!user) {
      res.status(401).json({ ok: false, message: "Usuario no cargado" });
      return;
    }

    const iv = Buffer.from(user.iv, "hex");
    const authTag = Buffer.from(user.authTag, "hex");

    const decipher = crypto.createDecipheriv("aes-256-gcm", KEY, iv);
    decipher.setAuthTag(authTag);

    let decoded = decipher.update(user.password, "hex", "utf8");
    decoded += decipher.final("utf8");

    req.decodedPassword = decoded;

    next();
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ ok: false, mensaje: "Error en desencriptación" });   
  }
};

export default {encodedPassword, decodedPassword};