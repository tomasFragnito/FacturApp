import { Request, Response } from "express";
import * as walletService from "../services/wallet.service";
import * as walletRepository from "../repositories/wallet.repository";

export const updateBalance = async (req: Request, res: Response): Promise<Response> => {
  const userId = req.user!.id;

  const wallet = await walletRepository.findwalletByIdUser(userId);

  if (!wallet) {
    return res.status(404).json({ error: "Wallet no encontrada" });
  }

  return res.json({
    balance: wallet.balance,
    updated_at: wallet.updated_at
  });
};

export const walletController = async (req: Request, res: Response): Promise<Response> => {
  const amount = Number(req.params.amount);
  if (isNaN(amount)) {
    return res.status(400).json({ error: "Monto inválido" });
  }

  const userId = req.user!.id; // viene del token

  const wallet = await walletService.depositWallet(userId, amount);

  return res.status(200).json({
    balance: wallet.balance,
    updated_at: wallet.updated_at
  });
};