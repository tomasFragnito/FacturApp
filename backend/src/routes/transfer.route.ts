import express from "express" 
import { walletController } from '../controllers/transfer.controller';

const router = express.Router()

router.post("/deposit/:amount?", walletController);

router.post("/");

//router.get("/:amount?", walletController);


export default router