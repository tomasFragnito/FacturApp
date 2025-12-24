import { User } from '../models/user.model.js';

export const findByEmail = async (email: string): Promise<User | null> => {
  return await User.findOne({
    where: { email },
    attributes: ['id', 'email'],
  });
};

export const createUser = async (name: string, email: string, password: string): Promise<User | null> => {
  return await User.create({
    name,
    email,
    password,
  });
};