//import dotenv from "dotenv";
//dotenv.config();

import 'dotenv/config';

import { connectDB, getSequelize } from "./config/db.js";

const PORT = process.env.PORT;

import app from "./app.js";

async function main() {
  try {
    //Conexión y Sincronización de la DB
    await connectDB();
    
    const sequelize = getSequelize(); // instancia seque
    await sequelize.sync({ alter: true });
    console.log("Base de datos sincronizada correctamente.");

    app.listen(PORT, () => {
      console.log(`Server: ${PORT}`);
    });
  } catch (error) {
    console.error("ERROR CRÍTICO AL INICIAR LA APLICACIÓN:");
    console.error(error);
    process.exit(1); 
  }
}

main();