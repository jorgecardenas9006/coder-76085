import fs, { stat } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import { get } from 'http';

//obtener la ruta del archivo
const __filename = fileURLToPath(import.meta.url);

//obtener la ruta de la carpeta actual
const __dirname = path.dirname(__filename);

//ruta del archivo de productos
const productsFilePath = path.join(__dirname, '../../data/products.json');

export default class ProductManager {
    //constructor
    constructor() {
        this.products = [];
    }

    //read products
    async readProducts() {
        try {
            this.products = JSON.parse(await fs.promises.readFile(productsFilePath, 'utf-8'));
        }
        catch (error) {
            this.products = [];
            console.log(error);
        }
    }
    
    //write products
    writeProducts() {
        try {
            fs.promises.writeFile(productsFilePath, JSON.stringify(this.products, null, 2));
        }
        catch (error) {
            console.log(error);
        }
    }

    //get all products
    async getAllProducts(limit) {
        try {
            await this.readProducts();
            //verificar si se envió un límite
            if (limit) {
                return this.products.slice(0, limit);
            }
            return this.products;
        }
        catch (error) {
            console.log(error);
        }
    }

    //get product by id
    async getProductsById(id) {
        try{
            await this.readProducts();
            return this.products.find(product => product.id === parseInt(id));
        }
        catch (error) {
            console.log(error);
        }
    }

    //create product
    async addProduct(product) {
        try {
            await this.readProducts();
            //verificar si el producto ya existe
            const productExists = this.products.find(p => p.code === product.code);
            if (productExists) {
                return false;
            }
            const id = this.products.length + 1;
            this.products.push({id, ...product, status: true});
            this.writeProducts();
        }
        catch (error) {
            console.log(error);
        }
    }

    //delete product
    async deleteProduct(id) {
        try {
            await this.readProducts();
            if (!this.products.some(product => product.id === parseInt(id))) {
                return false;
            }
            const newProducts = this.products.filter(product => product.id !== parseInt(id));
            this.products = newProducts;
            this.writeProducts();
            return true;
        } catch (error) {
            console.log(error);
        }
    }

    //update product
    async updateProduct(id, product) {
        try {
            const index = this.products.findIndex(product => product.id === id);
            if (index === -1) {
                return false;
            }
            this.products[index] = {...product, id};
            this.writeProducts();
            return true;
        }
        catch (error) {
            console.log(error);
        }
    }

    //update products for parameters
    async updateProductForParameters(id, product) {
        try{
            await this.readProducts();
            const index = this.products.findIndex(product => product.id === parseInt(id));
            if (index === -1) {
                return false;
            }
            if (product.price) {
                this.products[index].price = product.price;
            }
            if (product.stock) {
                this.products[index].stock = product.stock;
            }
            if (product.status) {
                this.products[index].status = product.status;
            }
            this.writeProducts();
            return true;
        }
        catch (error) {
            console.log(error);
        }
    }
}