
import * as userRepository from '../repositories/user.repository';
import bcrypt from "bcryptjs";

export const userExists = async (email: string): Promise<boolean> => {
  const user = await userRepository.findByEmail(email);
  return user !== null;
};

export const registerUser = async (
  name: string,
  email: string,
  password: string
) => {
  const exists = await userRepository.findByEmail(email);

  if (exists) {
    const err: any = new Error("Usuario ya existente");
    err.status = 409;
    throw err;
  }

  return userRepository.createUser(
    name,
    email,
    password
  );
};

export const validateLogin = async (email: string, password: string) => {
  const user = await userRepository.findByEmail(email);
  if (!user) return null;

  const ok = await bcrypt.compare(password, user.password);
  return ok ? user : null;
};

