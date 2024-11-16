import express from 'express';
import config from './configs/default.js';
import cartsRouter from './routes/carts.router.js';
import productsRouter from './routes/products.router.js';
import usersRouter from './routes/users.router.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.status(200).send('OK');
});

app.use('/api/v1/carts', cartsRouter);
app.use('/api/v1/products', productsRouter);
app.use('/api/v1/users', usersRouter);

const PORT = config.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});