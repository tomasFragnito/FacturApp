import express from "express";
import { getBalanceController, depositController, withdrawController } from "../controllers/wallet.controller";
import { authJwt } from "../middleware/auth.middleware";

const router = express.Router();

// Balance
router.get("/balance", authJwt, getBalanceController);

// Depositar
router.post("/deposit", authJwt, depositController);

// Retirar
router.post("/withdraw", authJwt, withdrawController);

export default router;
