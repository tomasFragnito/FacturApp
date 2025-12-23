import app from "./app";

const PORT = Number(process.env.PORT);


app.listen(3000, () => {
  console.log("server up in "+PORT);
});
