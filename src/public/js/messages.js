const socket = io();
const input = document.getElementById('textoEntrada');
const log = document.getElementById('log');

input.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        socket.emit('chat', input.value);
        input.value = '';
    }
}
);

socket.on('logs', (data) => {
    let logs = '';
    data.logs.forEach(element => {
        logs += `${element.id} dice: ${element.message}</br>`;
    });
    log.innerHTML = logs;
});