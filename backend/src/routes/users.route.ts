import express from "express" 
import { checkUser, register, loginController, hello } from '../controllers/user.controller';
import { requireEmailAndPassword } from "../middleware/auth.middleware";
import { hashPasswordMiddleware } from "../middleware/password.middleware";

const router = express.Router()

router.get('/exists', checkUser);

router.post('/sign',hashPasswordMiddleware, register);

router.post('/login', requireEmailAndPassword, loginController);

router.get('/hello', hello);

router.get("/", (_req, res) => {
    res.send("fetching all entry diaries")
})


router.post("/", (_req, res) => {
    res.send("saving a diary!")
})

export default router