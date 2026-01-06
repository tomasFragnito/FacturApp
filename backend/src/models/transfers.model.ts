import { DataTypes, Model, Sequelize } from 'sequelize';

export class Transfers extends Model {
  declare id: number;
  declare from_user_id: number;
  declare to_user_id: number;
  declare amount: number;
  declare created_at?: Date;
}

export function initTransfersModel(sequelizeInstance: Sequelize) {
  Transfers.init(
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      from_user_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      to_user_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      amount: {
        type: DataTypes.DECIMAL(15, 2),
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize: sequelizeInstance,
      tableName: 'transfers',
      timestamps: false,
    }
  );
}
