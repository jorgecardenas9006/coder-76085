import { Router } from "express";
import ProductManager from "../services/managers/ProductManager.js";
import handlebars from 'express-handlebars';

const router = Router();
const productManager = new ProductManager();

//Buscar un producto por un solo campo
/*router.get('/', async(req, res) => {
    try {
        const parametro = req.query;
        const product = await productManager.getByField(parametro);
        res.send({
            result: "Success",
            payload: product
        });
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});*/


//Buscar todos los productos
router.get('/', async (req, res) => {
    try {
        const products = await productManager.getAll();
        //enviar los productos a la vista index como json
        res.render('index', {products});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});

//Buscar un producto por ID
router.get('/:id', async (req, res) => {
    try {
        const product = await productManager.getById(req.params.id);
        res.send({
            result: "Success",
            payload: product
        });
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});

//Crear un producto
router.post('/', async (req, res) => {
    try {
        const product = await productManager.create(req.body);
        res.send({
            result: "Success",
            payload: product
        });
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});

export default router;