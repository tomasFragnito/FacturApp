import { sequelize } from "../config/db";
import { User, initUserModel } from "./user.model";
import { Wallet, initWalletModel } from "./wallet.model";
import { Transfers, initTransfersModel } from "./transfers.model";

// INIT
initUserModel(sequelize);
initWalletModel(sequelize);
initTransfersModel(sequelize);

// RELACIONES

//UNO A UNO (1:1)
User.hasOne(Wallet, { foreignKey: "user_id" });
Wallet.belongsTo(User, { foreignKey: "user_id" });

//UNO A MUCHOS (1:N)

// Cada transferencia tiene un único usuario emisor
User.hasMany(Transfers, { foreignKey: "from_user_id", as: "sentTransfers" });

// Cada transferencia tiene un único usuario receptor
User.hasMany(Transfers, { foreignKey: "to_user_id", as: "receivedTransfers" });

// Muchas transferencias pueden pertenecer a un mismo usuario emisor
Transfers.belongsTo(User, { foreignKey: "from_user_id", as: "fromUser" });

// Muchas transferencias pueden pertenecer a un mismo usuario receptor
Transfers.belongsTo(User, { foreignKey: "to_user_id", as: "toUser" });


export {
  sequelize,
  User,
  Wallet,
  Transfers,
};
