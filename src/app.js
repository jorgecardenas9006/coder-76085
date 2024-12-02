import express from 'express';
import handlebars from 'express-handlebars';
import _dirname from './utils.js';
import viewRoutes from './routes/view.routes.js';
import { Server } from 'socket.io';
import http from 'http';
import { productos } from './data/data.js';


const app = express();
const server = http.createServer(app);
const io = new Server(server);
app.engine('handlebars', handlebars.engine());
app.set('views', _dirname+'/views');
app.set('view engine', 'handlebars');
app.use(express.static(_dirname+'/public'));
const PORT = 8080;
app.use(express.json());
app.use('/', (req, res, next) => {
    req.io = io; // Añade io al objeto req para que esté disponible en las rutas
    next();
}, viewRoutes);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//subir todos los productos por sockets
io.on('connection', (socket) => {
    console.log('Nuevo cliente conectado!');
    socket.emit('productos', productos);
});