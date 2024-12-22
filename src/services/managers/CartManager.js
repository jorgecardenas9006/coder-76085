import { cartModel } from "../models/cart.model.js";
import { productModel } from "../models/product.model.js";
import { userModel } from "../models/user.model.js";

export default class CartManager {
    constructor() {
        this.cartModel = cartModel;
    }

    async getAllCarts() {
        return await this.cartModel.find();
    }

    async getByField(parametro){
        return await this.cartModel.find(parametro);
    }
    
    async createCart(cart){
        return await this.cartModel.create(cart);
    }

    async updateCart(id, cart){
        return await this.cartModel.findByIdAndUpdate(id, cart, {new: true});
    }

    async deleteCart(id){
        return await this.cartModel.findByIdAndDelete(id);
    }

    async addProduct(id, product){
        const cart = await this.cartModel.findById(id);
        cart.products.push(product);
        return await cart.save();
    }

    async updateProduct(id, idProduct, product){
        const cart = await this.cartModel.findById(id);
        const productIndex = cart.products.findIndex(p => p._id == idProduct);
        cart.products[productIndex] = product;
        return await cart.save();
    }

    async deleteProduct(id, idProduct){
        const cart = await this.cartModel.findById(id);
        const productIndex = cart.products.findIndex(p => p._id == idProduct);
        cart.products.splice(productIndex, 1);
        return await cart.save();
    }

    async deleteAllProducts(id){
        const cart = await this.cartModel.findById(id);
        cart.products = [];
        return await cart.save();
    }

    async populateAll(filter) {
        return await this.cartModel
            .findOne(filter)
            .populate('usuarios.usuario')
            .populate('productos.producto');
    }
}