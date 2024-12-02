const socket = io();
socket.emit('message', 'enviando mensaje desde el cliente');
socket.on('message', (data) => {
    console.log('Message', data);
});

//broadcast en el cliente
socket.on("broadcast", (data) => {
    console.log("Broadcast", data);
});

//emitir un mensaje a todos los usuarios conectados
socket.on("allEvents", (data) => {
    console.log("All events", data);
});