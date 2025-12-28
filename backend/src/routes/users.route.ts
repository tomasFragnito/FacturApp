import express from "express" 
import { register, hello, login } from '../controllers/user.controller.js';
import { encodedPassword, decodedPassword } from "../middleware/crypto.js";
import { loadUser } from "../middleware/userMiddlewares.js"

const router = express.Router()

router.post('/sign', encodedPassword, register);

router.post('/login',loadUser, decodedPassword, login);

router.get('/hello', hello);

router.get("/", (_req, res) => {
    res.send("fetching all entry diaries")
})


router.post("/", (_req, res) => {
    res.send("saving a diary!")
})

export default router