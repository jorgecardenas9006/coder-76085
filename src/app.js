import express from 'express';
import handlebars from 'express-handlebars';
import _dirname from './utils.js';
import viewRoutes from './routes/view.routes.js';
import { Server } from 'socket.io';

const app = express();

app.engine('handlebars', handlebars.engine());
app.set('views', _dirname+'/views');
app.set('view engine', 'handlebars');
app.use(express.static(_dirname+'/public'));
app.use('/',viewRoutes);

const logs =[];

/*app.get('/test-hbs', (req, res) => {
    const userTest = {
        name: "John",
        edad: 30,
        city: "New York"
    };
    res.render("hello",userTest);
});*/



const httpServer = app.listen(8080, () => {
  console.log(`Server running on port ${httpServer.address().port}`);
});

const socketServer = new Server(httpServer);

/*socketServer.on('connection', (socket) => {
  console.log('New connection', socket.id);

  // on sirve para escuchar eventos
  socket.on('message', (data) => {
    console.log('Message received', data);
    //responder el mensaje
    socket.emit('message', 'respuesta del server');
  });

  // hacemos un broadcast del nuevo usuario que se conecta al chat este mensaje no lo verá el usuario que se conecta
  socket.broadcast.emit("broadcast", "prueba")

  // emitir un mensaje a todos los usuarios conectados
  socketServer.emit("allEvents", "eventos para todos los usuarios");

});*/

socketServer.on('connection', (socket) => {
  console.log('New connection', socket.id);

  //recibo el mensaje de la key chat
  socket.on('chat', (data) => {
    console.log('Chat', data);
    //guardo el mensaje en un array
    logs.push(
      {
        id: socket.id,
        message: data
      } 
    );
    //envio el mensaje a todos los usuarios conectados
    socketServer.emit('logs', { logs });
  });
});