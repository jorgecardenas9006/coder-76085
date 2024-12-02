const productos = document.getElementById('productos');
const socket = io();
socket.emit('productos', 'Iniciando conexion');

//usar map para mostrar los objetos en el front
const dataMap = socket.on("productos", (data) => {
    removeChildProducts();
    data.map((producto) => {
        productos.innerHTML += `
        <tr>
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>${producto.marca}</td>
            <td>${producto.modelo}</td>
            <td>${producto.precio}</td>
            <td>${producto.categoria}</td>
            <td>
                <div class="d-flex justify-content-center">
                    <button class="btn btn-danger" onclick="eliminarProducto(${producto.id})">Borrar</button>
                </div>
            </td>
        </tr>`
    });
});

//funcion para eliminar producto por endpoint
function eliminarProducto(id) {
    fetch(`http://localhost:8080/realTimeProducts/${id}`, {
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        });
}

function removeChildProducts() {
    while (productos.firstChild) {
        productos.removeChild(productos.firstChild);
    }
}

