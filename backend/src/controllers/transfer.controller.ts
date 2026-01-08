import { Request, Response } from "express";
import * as userService from "../services/user.service";
import * as walletService from "../services/transfer.service"

export const walletController = async (req: Request, res: Response): Promise<Response> => {
  const { email } = req.body;
  const amount = Number(req.params.amount);

  if (isNaN(amount)) {
    return res.status(400).json({ error: "Monto inválido" });
  }

  const user = await userService.searchUser(email);
  if (!user) {
    return res.status(404).json({ error: "Usuario no encontrado: transfer.controller" });
  }

  const wallet = await walletService.depositWallet(user.id, amount)

  return res.status(200).json({
    balance: wallet.balance,
    updated_at: wallet.updated_at
  });
};