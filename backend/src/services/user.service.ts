
import * as userRepository from '../repositories/user.repository.js';

export const userExists = async (email: string): Promise<boolean> => {
  const user = await userRepository.findByEmail(email);
  return user !== null;
};

export const registerUser = async (name: string, email: string, password: string) => {
  const exists = await userRepository.findByEmail(email);

  if (exists) {
    throw console.error(409, 'Usuario ya existente');
  }

  return await userRepository.createUser(name, email, password);
};


