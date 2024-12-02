import { Router } from "express";

const router = Router();

// Endpoint para agregar productos
router.post('/realTimeProducts', (req, res) => {
  const { body } = req;
  const { nombre, marca, modelo, precio, categoria } = body;
  const id = productos.length + 1;
  const newProduct = { id, nombre, marca, modelo, precio, categoria };
  productos.push(newProduct);
  // Emitir el evento de socket.io con todos los productos
  req.io.emit('productos', productos);
  res.json(newProduct);
});

// Endpoint para eliminar productos
router.delete('/realTimeProducts/:id', (req, res) => {
  const { id } = req.params;
  const product = productos.find(product => product.id === Number(id));
  if (product) {
    // Eliminar el producto del array
    productos = productos.filter(product => product.id !== Number(id));
    // Emitir el evento de socket.io con todos los productos
    req.io.emit('productos', productos);
    res.json(product);
  } else {
    res.status(404).json({ error: 'Producto no encontrado' });
  }
});
router.get('/realTimeProducts', (req, res) => {
    res.render('realTimeProducts');
});


export default router;
