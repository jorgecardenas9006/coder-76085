import dotenv from 'dotenv';

// Cargar variables del archivo .env
dotenv.config();

// Exportar configuraciones
export default {
    APP_NAME: process.env.APP_NAME || "MyNodeApp",
    PORT: process.env.PORT || 3000,
    DATABASE_URL: process.env.DATABASE_URL || "mongodb://localhost:27017/mydatabase",
    JWT_SECRET: process.env.JWT_SECRET || "defaultsecret",
    ENV: process.env.NODE_ENV || "development",
    API_PREFIX: process.env.API_PREFIX || "/api/v1",
  };