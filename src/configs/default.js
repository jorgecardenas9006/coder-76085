import dotenv from 'dotenv';

// Cargar variables del archivo .env
dotenv.config();

// Exportar configuraciones
export default {
    APP_NAME: process.env.APP_NAME,
    PORT: process.env.PORT || 3000,
    DATABASE_URL: "mongodb+srv://"+process.env.DB_USER+":"+process.env.DB_PASSWORD+"@"+process.env.DB_HOST+"/"+process.env.DB_NAME+"?retryWrites=true&w=majority&appName=coderCluster" || "mongodb://localhost:27017/express-mongo",
    API_PREFIX: process.env.API_PREFIX || "/api/v1",
  };