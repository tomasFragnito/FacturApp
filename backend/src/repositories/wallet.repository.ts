import { Wallet } from '../models/wallet.model';

export const findwalletByIdUser = async (user_id: number): Promise<Wallet | null> => {
  return await Wallet.findOne({
    where: { user_id },
    attributes: ["user_id", "balance", "updated_at"],
  });
};

export const addBalanceToWallet = async ( wallet: Wallet, amount: number ): Promise<Wallet> => {
  await wallet.increment('balance', { by: amount });
  await wallet.reload();

  return wallet;
};

export const createWallet = async (
  user_id: number
): Promise<Wallet> => {
  return Wallet.create({
    user_id,
    balance: 0
  });
};
