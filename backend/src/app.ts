import express from "express" // -> ESmodules // const express = require("express") -> commonjs [obsoleto]
import cors from "cors";

import { connectDB, sequelize } from "./config/db.js";
import usersRouter from "./routes/users.route.js"

await connectDB();
await sequelize.sync();

const app = express();
app.use(express.json())

app.use(cors({ origin: true }));

/*
app.get("/ping", (_req, res) =>{
    console.log("someone ponged here!!")
    res.send("ping")
})
*/

app.use("/users", usersRouter);

export default app;
