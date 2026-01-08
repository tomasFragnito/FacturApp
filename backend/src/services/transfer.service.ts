import * as walletRepository from '../repositories/wallet.repository';


export const depositWallet = async (userId: number, amount: number) => {

  const wallet = await walletRepository.findwalletByIdUser(userId);

  if (!wallet) throw new Error("Wallet no encontrada (transfer.service.ts)");

  if (wallet.balance + amount < 0) {
    throw new Error("Saldo insuficiente");
  }

  await walletRepository.addBalanceToWallet(wallet, amount);

  return wallet;
}
