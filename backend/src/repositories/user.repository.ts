import { User } from '../models/user.model';

export const findByEmail = async (email: string): Promise<User | null> => {
  return await User.findOne({
    where: { email },
    attributes: ["id", "email", "password", "created_at"],
  });
};

export const createUser = async (
  name: string,
  email: string,
  password: string
): Promise<User> => {
  return User.create({
    name,
    email,
    password
  });
};
