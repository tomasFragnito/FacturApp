import "express";
import { User } from "../models/User"; // ajustá el path

declare global {
  namespace Express {
    interface Request {
      user?: User;
      encodedPassword?: {
        encoded: string;
        iv: string;
        authTag: string;
      };
      decodedPassword?: string;
    }
  }
}

export {};
