import { Router } from "express";
import ProductManager from "../services/ProductManager.js";

const router = Router();
const productManager = new ProductManager();


//listar todos los productos
router.get('/', async (req, res) => {
    try {
        const limit = req.query.limit ? parseInt(req.query.limit) : undefined;
        const products = await productManager.getAllProducts(limit);
        res.status(200).json(products);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});

//listar un producto por id
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const product = await productManager.getProductsById(id);
        if (!product) {
            return res.status(404).send('Product not found');
        }
        res.status(200).json(product);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});

//crear un producto
router.post('/', async (req, res) => {
    try {
        const {title, description,code, price, stock, category, thumbnail} = req.body;
        const product = {title, description, code, price, stock, category, thumbnail};
        if (!title || !description || !code || !price || !stock || !category) {
            return res.status(400).send('All fields are required');
        }
        const createProduct = await productManager.addProduct(product);
        if (!createProduct) {
            return res.status(400).send('Product already exists');
        }
        res.status(201).send('Product created');
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});

//actualizar un producto
router.put('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const {title, description, code, price, stock, category, thumbnail} = req.body;
        const product = {title, description, code, price, stock, category, thumbnail};
        if (!title || !description || !code || !price || !stock || !category) {
            return res.status(400).send('All fields are required');
        }
        const updateProduct = await productManager.updateProduct(id, product);
        if (!updateProduct) {
            return res.status(404).send('Product not found');
        }
        res.status(200).send('Product updated');
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});

//eliminar un producto
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deleteProduct = await productManager.deleteProduct(id);
        if (!deleteProduct) {
            return res.status(404).json('Product not found');
        }
        res.status(200).json('Product deleted');
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});

//actulizar la cantidad, el precio o las caracteristicas de un producto
router.patch('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const {price, stock, status} = req.body;
        const product = {price, stock, status};
        if (!price && !stock && !status) {
            return res.status(400).send('At least one field is required: price, stock or status');
        }
        const updateProduct = await productManager.updateProductForParameters(id, product);
        if (!updateProduct) {
            return res.status(404).send('Product not found');
        }
        res.status(200).send('Product updated');
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});

export default router;
