//import { timeStamp } from 'console';
import { DataTypes, Model, Sequelize } from 'sequelize';

export class Wallet extends Model {
  declare user_id: number;
  declare balance: number;
  declare updated_at?: Date;
  declare password: string;
  declare created_at?: Date;
}

export function initWalletModel(sequelizeInstance: Sequelize) {
  Wallet.init(
    {
      user_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      balance: {
        type: DataTypes.DECIMAL(15, 2),
        allowNull: false,
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize: sequelizeInstance,
      tableName: 'wallets',
      timestamps: false,
    }
  );
}
