import express from "express" // -> ESmodules // const express = require("express") -> commonjs [obsoleto]
import cors from "cors";

import { connectDB, sequelize } from "./config/db";
import usersRouter from "./routes/users.route"

console.log("🔫");

connectDB();
sequelize.sync();

const app = express();
app.use(express.json())

app.use(cors({
  origin: "http://127.0.0.1:5500",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

/*
app.get("/ping", (_req, res) =>{
    console.log("someone ponged here!!")
    res.send("ping")
})
*/

app.use((req, _res, next) => {
  console.log(req.method, req.path);
  next();
});


app.use("/user", usersRouter);

export default app;
