
import * as userRepository from '../repositories/user.repository';

export const userExists = async (email: string): Promise<boolean> => {
  const user = await userRepository.findByEmail(email);
  return user !== null;
};

