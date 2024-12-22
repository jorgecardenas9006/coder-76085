import express from 'express';
import mongoose from 'mongoose';
import __dirname from './tools.js';
import usersRouter from './routes/users.router.js';
import productsRouter from './routes/products.router.js';
import cartsRouter from './routes/carts.router.js';

import { cartModel } from './services/models/cart.model.js';
import { productModel } from './services/models/product.model.js';
import { userModel } from './services/models/user.model.js';

// Importar enviroment variables
import config from './configs/default.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//  Ruta inicial
app.get('/', (req, res) => {
    res.status(200).send('OK');
});

// Rutas de la API

// Ruta de usuarios
app.use(config.API_PREFIX+'/users', usersRouter);

// Ruta de productos
app.use(config.API_PREFIX+'/products', productsRouter);

// Ruta de carritos
app.use(config.API_PREFIX+'/carts', cartsRouter);


// Conectar a la base de datos
const connectMongo = async () => {
    try {
        await mongoose.connect(config.DATABASE_URL);
        console.log('Connected to MongoDB');
        // El populate se hace en la ruta de carritos /:id para que no se haga en cada consulta
    } catch (error) {
        console.error('Could not connect to MongoDB');
        console.error(error);
    }
}
connectMongo();

// Iniciar el servidor
const PORT = config.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});