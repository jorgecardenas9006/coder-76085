import fs, { read, stat } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import { get } from 'http';
import ProductManager from './ProductManager.js';

//obtener la ruta del archivo
const __filename = fileURLToPath(import.meta.url);

//obtener la ruta de la carpeta actual
const __dirname = path.dirname(__filename);

//ruta del archivo de productos
const productsFilePath = path.join(__dirname, '../../data/carts.json');

export default class CartManager {
    //constructor
    constructor() {
        this.carts = [];
        this.readCarts();
        this.ProductManager = new ProductManager();
    }

    //read carts
    async readCarts() {
        try {
            this.carts = JSON.parse(await fs.promises.readFile(productsFilePath, 'utf-8'));
        }
        catch (error) {
            this.carts = [];
            console.log(error);
        }
    }

    //write carts
    async writeCart() {
        try {
            await fs.promises.writeFile(productsFilePath, JSON.stringify(this.carts, null, 2));
        }
        catch (error) {
            console.log(error);
        }
    }

    //liustar todos los carritos
    async getAllCarts() {
        return this.carts;
    }

    //listar un carrito por id
    async getCartById(id) {
        try{
            const cart = this.carts.find(cart => cart.id === parseInt(id)); 
            if (!cart) {
                return false;
            }
            return cart;
            }
            catch (error) {
                throw new Error(error);
            }
    }

    //crear un carrito
    async createCart(userId) {
        try {
            const cart = {"id": this.carts.length + 1, "userId": userId, products: []};
            this.carts.push(cart);
            await this.writeCart();
            return true;
        }
        catch (error) {
            throw new Error(error);
        }
    }
}