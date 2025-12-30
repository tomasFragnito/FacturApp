
import { Sequelize } from 'sequelize';

let sequelizeInstance: Sequelize | undefined;

export const connectDB = async () => {
    
    const dbUri = process.env.DB_SQL;
    if (!dbUri) {
        throw new Error("Error: La variable de entorno DB_SQL no está definida en .env.");
    }
    
    if (!sequelizeInstance) {
        console.log("Creando instancia de Sequelize...");
        sequelizeInstance = new Sequelize(dbUri, {
            dialect: "mysql",
            logging: false,
        });
    }

    // Autenticar la conexión (esto lanza una excepción si falla la conexión)
    await sequelizeInstance.authenticate();
    console.log('DB conectada.');
};

// Exportamos una función para obtener la instancia (más seguro que exportar la variable directamente)
export const getSequelize = (): Sequelize => {
    if (!sequelizeInstance) {
        throw new Error("Sequelize no ha sido inicializado. Llama a connectDB primero.");
    }
    return sequelizeInstance;
}
