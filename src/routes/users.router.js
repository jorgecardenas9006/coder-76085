import {Router} from 'express';
import UserManager from '../services/UserManager.js';

const router = Router();
const userManager = new UserManager();

//taer todos los usuarios
router.get('/', async (req, res) => {
    try {
        const limit = req.query.limit ? parseInt(req.query.limit) : undefined;
        const users = await userManager.getAllUsers(limit);
        res.status(200).json(users);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});

//traer un usuario por id
router.get('/:id', async (req, res) => {
    try {
        const user = await userManager.getUserById(req.params.id);
        res.status(200).json(user);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});

//crear un usuario



export default router;
