import { Sequelize } from 'sequelize';
import { initUserModel } from "../models/user.model";
import { initWalletModel } from '../models/wallet.model';
//import { initTransfersModel } from '../models/transfers.model';

console.log(" Sequelize en db levantado!");

let sequelize: Sequelize;

sequelize = new Sequelize(String(process.env.DB_SQL), {
  dialect: "mysql",
  logging: false, // evita que se impriman las consultas SQL
});

export const connectDB = async () => {
  await sequelize.authenticate();
  initUserModel(sequelize);
  initWalletModel(sequelize);
  await sequelize.sync();
  console.log('DB conectada');
};

export { sequelize };
