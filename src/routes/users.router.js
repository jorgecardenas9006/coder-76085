import { Router } from 'express';
import UserManager from '../services/managers/UserManager.js';

const router = Router();

// Buscar un usuario por un solo campo
router.get('/', async(req, res) => {
    try {
        const parametro = req.query;
        const userManager = new UserManager();
        const user = await userManager.getByField(parametro);
        res.send({
            result: "Success",
            payload: user
        })
    }
    catch (error) {
        res.status(400).json({message: error.message});
    }
});

//Buscar todos los usuarios
router.get('/', async(req, res) => {
    try {
        const userManager = new UserManager();
        const users = await userManager.getAll();
        res.send({
            result: "Success",
            payload: users
        })
    }
    catch (error) {
        res.status(400).json({message: error.message});
    }
});

//Buscar un usuario por ID
router.get('/:id', async(req, res) => {
    try {
        const userManager = new UserManager();
        const user = await userManager.getById(req.params.id);
        res.send({
            result: "Success",
            payload: user
        })
    }
    catch (error) {
        res.status(400).json({message: error.message});
    }
});

//Crear un usuario
router.post('/', async(req, res) => {
    try {
        const userManager = new UserManager();
        const user = await userManager.create(req.body);
        res.send({
            result: "Success",
            payload: user
        })
    }
    catch (error) {
        res.status(400).json({message: error.message});
    }
});

export default router;