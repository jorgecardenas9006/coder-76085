import {Router} from 'express';
import CartManager from '../services/CartManager.js';

const router = Router();
const cartManager = new CartManager();

//listar todos los carritos
router.get('/', async (req, res) => {
    try {
        const carts = await cartManager.getAllCarts();
        res.status(200).json(carts);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});

//listar un carrito por id
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const cart = await cartManager.getCartById(id);
        if (!cart) {
            return res.status(404).send('Cart not found');
        }
        res.status(200).json(cart);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});

//crear un carrito, cuando se crea un carrito se debe crear vacio, solo con el id y el id del usuario
//este metodo solo se puede usar cuando se crea un usuario nuevo
//pero antes debemos validar si el usuario existe
router.post('/', async (req, res) => {
    try {
        const {userId} = req.body;
        const cart = {userId};
        if (!userId) {
            return res.status(400).send('All fields are required');
        }
        const createCart = await cartManager.addCart(cart);
        if (!createCart) {
            return res.status(400).send('Cart already exists');
        }
        res.status(201).send('Cart created');
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});

//agregar un producto a un carrito
router.post('/:id/add-product', async (req, res) => {
    try {
        const id = req.params.id;
        const {productId} = req.body;
        const addProduct = await cartManager.addProductToCart(id, productId);
        if (!addProduct) {
            return res.status(400).send('Error adding product to cart');
        }
        res.status(201).send('Product added to cart');
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});


export default router;