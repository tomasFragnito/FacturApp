import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db.js';

export class User extends Model {
  declare id: number;
  declare name: string;
  declare email: string;
  declare password: string;
  declare iv: string;
  declare authTag: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    iv: {
      type: DataTypes.STRING,
    },
    authTag: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    sequelize,
    tableName: 'users',
    timestamps: false,
  }
);

