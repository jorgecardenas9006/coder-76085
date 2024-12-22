import {Router} from 'express';
import CartManager from '../services/managers/CartManager.js';

const router = Router();
const cartManager = new CartManager();


//Buscar los usuarios por parametros o query
router.get('/', async(req, res) => {
    try {
        const parametro = req.query;
        const carts = await cartManager.getByField(parametro);
        res.send({
            result: "Success",
            payload: carts
        });
    }
    catch (error) {
        res.status(400).json({message: error.message});
    }
});

//Buscar todos los carritos
router.get('/all', async(req, res) => {
    try {
        const carts = await cartManager.getAllCarts();
        res.send({
            result: "Success",
            payload: carts
        });
    }
    catch (error) {
        res.status(400).json({message: error.message});
    }
});

//Buscar un carrito por id con populate
router.get('/:id', async (req, res) => {
    try {
        const cartId = req.params.id;

        // Popular carrito
        const cart = await cartManager.populateAll({ _id: cartId });
        res.send({
            result: "Success",
            payload: cart
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//Crear un carrito
router.post('/', async(req, res) => {
    try {
        const userId = req.body.usuario;
        const products = req.body.products;
        if (!userId) {
            throw new Error("usuario is required");
        }
        const carts = await cartManager.createCart({ 
            usuarios: [{ usuario: userId }] , 
            products: [{ productos: products }] || []
        });
        res.send({
            result: "Success",
            payload: carts
        });
    }
    catch (error) {
        res.status(400).json({message: error.message});
    }
});

//Actualizar un carrito
router.put('/:id', async(req, res) => {
    try {
        const carts = await cartManager.updateCart(req.params.id, req.body);
        res.send({
            result: "Success",
            payload: carts
        });
    }
    catch (error) {
        res.status(400).json({message: error.message});
    }
});

//Eliminar un carrito
router.delete('/:id', async(req, res) => {
    try {
        const carts = await cartManager.deleteCart(req.params.id);
        res.send({
            result: "Success",
            payload: carts
        });
    }
    catch (error) {
        res.status(400).json({message: error.message});
    }
});

//Agregar un producto a un carrito
router.post('/:id/products', async(req, res) => {
    try {
        const productId = req.body.producto;
        if (!productId) {
            throw new Error("product_id is required");
        }
        const carts = await cartManager.addProduct(req.params.id, req.body);
        res.send({
            result: "Success",
            payload: carts
        });
    }
    catch (error) {
        res.status(400).json({message: error.message});
    }
});

//actualizar un producto de un carrito
router.put('/:id/products/:idProduct', async(req, res) => {
    try {
        const carts = await cartManager.updateProduct(req.params.id, req.params.idProduct, req.body);
        res.send({
            result: "Success",
            payload: carts
        });
    }
    catch (error) {
        res.status(400).json({message: error.message});
    }
});

//Borrar un producto de un carrito
router.delete('/:id/products/:idProduct', async(req, res) => {
    try {
        const carts = await cartManager.deleteProduct(req.params.id, req.params.idProduct);
        res.send({
            result: "Success",
            payload: carts
        });
    }
    catch (error) {
        res.status(400).json({message: error.message});
    }
});



export default router;

