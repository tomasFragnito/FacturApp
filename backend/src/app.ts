import express from "express" // -> ESmodules // const express = require("express") -> commonjs [obsoleto]
import cors from "cors";

import usersRouter from "./routes/users.route.js"

const app = express();
app.use(express.json())

const allowedOrigin = "http://127.0.0.1:5500";

//app.use(cors({ origin: true }));
app.use(cors({ origin: allowedOrigin }));


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


app.use("/users", usersRouter);

export default app;
