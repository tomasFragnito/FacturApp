import express from "express" 
import { register, hello, login } from '../controllers/user.controller.js';
//import { authenticateToken } from '../middlewares/authMiddleware.js';

const router = express.Router()

router.post('/sign', register);

router.post('/login', login);
//router.post('/hello', authenticateToken, hello);

router.get('/hello', hello);

router.get("/", (_req, res) => {
    res.send("fetching all entry diaries")
})


router.post("/", (_req, res) => {
    res.send("saving a diary!")
})

export default router