import express from "express"; // -> ESmodules
// const express = require("express") -> commonjs [obsoleto]
import usersRouter from "./routes/users.route.js";
const app = express();
app.use(express.json());
const PORT = 3000;
app.get("/ping", (_req, res) => {
    console.log("someone ponged here!!");
    res.send("ping");
});
app.use("/api/users", usersRouter);
app.listen(PORT, () => {
    console.log("server up in " + PORT);
});
//# sourceMappingURL=server.js.map