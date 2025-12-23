import express from "express" // -> ESmodules // const express = require("express") -> commonjs [obsoleto]
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db";

import usersRouter from "./routes/users.route.js"

connectDB();

const app = express();
app.use(express.json())

app.use(cors({ origin: true }));

dotenv.config();

/*
app.get("/ping", (_req, res) =>{
    console.log("someone ponged here!!")
    res.send("ping")
})
*/

app.use("/users", usersRouter);

export default app;
