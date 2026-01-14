import "express";

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: number;
      };
    }
    interface Request {
      user?: User;
    }
  }
}
