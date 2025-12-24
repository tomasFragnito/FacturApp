import { Sequelize } from 'sequelize';

console.log(" Sequelize en db levantado!");

let sequelize: Sequelize;

sequelize = new Sequelize(String(process.env.DB_SQL), {
  dialect: "mysql",
  logging: false, // evita que se impriman las consultas SQL
});

export const connectDB = async () => {
  await sequelize.authenticate();
  console.log('DB conectada');
};

export { sequelize };
