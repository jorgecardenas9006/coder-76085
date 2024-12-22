import {Router} from 'express';
import {userModel} from '../models/user.model.js';

const router = Router();

//traer todos los usuarios
router.get('/', async(req, res) => {
    try {
        //traer la informacion de la base de datos de los usuarios
        const users = await userModel.find();
        res.send({
            result: 'Success',
            payload: users,
        });
    }
    catch (error) {
        res.status
    }
});

//Crear un nuevo usuario
router.post('/', async(req, res) => {
    try {
        const user = await userModel.insertOne(req.body);
        res.send({
            result: 'Success',
            payload: user,
        });
    }
    catch (error) {
        res.status(400).send({
            result: 'Error',
            message: error.message,
        });
    }
});

//crear muchos usuarios
router.post('/many', async(req, res) => {
    try {
        const users = await userModel.insertMany(req.body);
        res.send({
            result: 'Success',
            payload: users,
        });
    }
    catch (error) {
        res.status(400).send({
            result: 'Error',
            message: error.message,
        });
    }
});






export default router;