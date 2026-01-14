import * as walletRepository from "../repositories/wallet.repository";

/**
 * Obtiene la wallet del usuario o lanza error
 */
const getWalletOrFail = async (userId: number) => {
  const wallet = await walletRepository.findwalletByIdUser(userId);

  if (!wallet) {
    throw new Error("Wallet no encontrada");
  }

  return wallet;
};

/**
 * Obtener wallet (lectura)
 */
export const getWalletUser = async (userId: number) => {
  return getWalletOrFail(userId);
};

/**
 * Depositar dinero
 */
export const depositWallet = async (userId: number, amount: number) => {
  if (amount <= 0) {
    throw new Error("Monto inválido");
  }

  const wallet = await getWalletOrFail(userId);

  await walletRepository.addBalanceToWallet(wallet, amount);

  return wallet;
};

/**
 * Retirar dinero
 */
export const withdrawWallet = async (userId: number, amount: number) => {
  if (amount <= 0) {
    throwError("Monto inválido", 400);
  }

  const wallet = await getWalletOrFail(userId);

  if (Number(wallet.balance) < amount) {
    throwError("Saldo insuficiente", 409);
  }

  await walletRepository.addBalanceToWallet(wallet, -amount);

  return wallet;
};
