import express from "express" 
import { checkUser } from '../controllers/user.controller';

const router = express.Router()

router.get('/exists', checkUser);

router.get("/", (_req, res) => {
    res.send("fetching all entry diaries")
})


router.post("/", (_req, res) => {
    res.send("saving a diary!")
})

export default router