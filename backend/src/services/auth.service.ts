import jwt, { SignOptions } from "jsonwebtoken";

export const createToken = (userId: number): string => {
  const jwtSecret = process.env.JWT_SECRET;
  const jwtExpires = process.env.JWT_EXPIRES;

  if (!jwtSecret || !jwtExpires) {
    throw new Error("JWT env vars no definidas");
  }

  const options: SignOptions = {
    expiresIn: jwtExpires as SignOptions["expiresIn"]
  };

  return jwt.sign(
    { userId },
    jwtSecret,
    options
  );
};

export const verifyToken = (token: string): { userId: number } => {
  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) {
    throw new Error("JWT_SECRET no definido");
  }

  return jwt.verify(token, jwtSecret) as { userId: number };
};
