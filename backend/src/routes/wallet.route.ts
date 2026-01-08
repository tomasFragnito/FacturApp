import express from "express" 
import { walletController, updateBalance } from '../controllers/wallet.controller';
import { authJwt } from "../middleware/auth.middleware";

const router = express.Router()

//router.post("/deposit/:amount?", walletController);
//router.get("/updateBalance/:mail?", updateBalance);

router.post("/");

//router.get("/:amount?", walletController);

router.post("/deposit/:amount", authJwt, walletController);
router.get("/updateBalance", authJwt, updateBalance);

export default router