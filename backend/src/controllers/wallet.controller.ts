import { Request, Response } from "express";
import * as walletService from "../services/wallet.service";

export const getBalanceController = async (req: Request, res: Response) => {
  const userId = req.user!.id;

  const wallet = await walletService.getWalletUser(userId);

  if (!wallet) {
    return res.status(404).json({ error: "Wallet no encontrada" });
  }

  return res.json({
    balance: wallet.balance,
    updated_at: wallet.updated_at
  });
};

export const depositController = async (req: Request, res: Response) => {
  try{
    const { amount } = req.body;

    if (!amount || isNaN(amount) || amount <= 0) {
      return res.status(400).json({ error: "Monto inválido" });
    }

    const userId = req.user!.id;

    const wallet = await walletService.depositWallet(userId, Number(amount));

    return res.json({
      balance: wallet.balance,
      updated_at: wallet.updated_at
    });
  }
  catch(error:any){
    return res.status(error.status || 500).json({error:error.body || "error interno"});
  }
};

export const withdrawController = async (req: Request, res: Response) => {
  try{
    const { amount } = req.body;

    if (!amount || isNaN(amount) || amount <= 0) {
      return res.status(400).json({ error: "Monto inválido" });
    }

    const userId = req.user!.id;

    const wallet = await walletService.withdrawWallet(userId, Number(amount));

    return res.json({
      balance: wallet.balance,
      updated_at: wallet.updated_at
    });
  }
  catch(error: any){
    return res.status(error.status || 500).json({error:error.body || "error interno"});
  }

};
