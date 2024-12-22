import express from 'express';
import __dirname from './utils.js';
import mongoose from 'mongoose';
import usersRouter from './routes/users.router.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendStatus(200);
    }
);

app.use('/api/users', usersRouter);

//metodo para conectar a la base de datos
const db = async () => {
    try {
        await mongoose.connect('mongodb+srv://jorgecardenas9006:u4W9KIPlbqZFHo3G@codercluster.bi8xn.mongodb.net/coder');
        console.log('Database connected');
    } catch (error) {
        console.log('Error: ', error);
    }
}
db();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});