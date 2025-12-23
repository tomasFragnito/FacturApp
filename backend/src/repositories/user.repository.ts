import { User } from '../models/user.model';

export const findByEmail = async (email: string): Promise<User | null> => {
  return await User.findOne({
    where: { email },
    attributes: ['id', 'email'],
  });
};