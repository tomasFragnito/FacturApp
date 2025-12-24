import express from "express" 
import { checkUser, register, hello } from '../controllers/user.controller.js';


const router = express.Router()

router.get('/exists', checkUser);

router.post('/sign', register);

router.get('/hello', hello);

router.get("/", (_req, res) => {
    res.send("fetching all entry diaries")
})


router.post("/", (_req, res) => {
    res.send("saving a diary!")
})

export default router