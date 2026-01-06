import { Wallet } from '../models/wallet.model';

export const findwallet = async (user_id: number): Promise<Wallet | null> => {
  return await Wallet.findOne({
    where: { user_id },
    attributes: ["user_id", "balance", "updated_at"],
  });
};

export const createWallet = async (
  user_id: number
): Promise<Wallet> => {
  return Wallet.create({
    user_id,
    balance: 0
  });
};
