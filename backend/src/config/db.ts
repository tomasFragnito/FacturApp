import { Sequelize } from 'sequelize';

console.log(" Sequelize en db levantado!");

let sequelize: Sequelize;

export const connectDB = async (): Promise<Sequelize> => {
  if (sequelize) return sequelize; // singleton

  sequelize = new Sequelize(String(process.env.DB_SQL), {
    dialect: "mysql",
    logging: false, // evita que se impriman las consultas SQL
  });

  try {
    await sequelize.authenticate();
    console.log("DB conectada");
  } catch (error) {
    console.error("Error DB:", error);
    throw error;
  }

  return sequelize;
};

export { sequelize };
