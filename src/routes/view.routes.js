import { Router } from "express";
import { productos } from '../data/data.js';

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
  const productIndex = productos.findIndex(product => product.id === parseInt(id));
  if (productIndex !== -1) {
    productos.splice(productIndex, 1);
    // Emitir el evento de socket.io con todos los productos
    req.io.emit('productos', productos);
    res.json({ success: 'Producto eliminado' });
  } else {
    res.json({ error: 'Producto no encontrado' });
  }
});


router.get('/realTimeProducts', (req, res) => {
    res.render('realTimeProducts');
});


export default router;
