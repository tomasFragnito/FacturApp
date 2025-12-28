import "express";

declare global {
  namespace Express {
    interface Request {
      encodedPassword?: {
        encoded: string;
        iv: string;
        authTag: string;
      };
      decodedPassword?: string;
      user?: {
        password: string;
        iv: string;
        authTag: string;
      };
      authTag?: string;
    }
  }
}

export {};
