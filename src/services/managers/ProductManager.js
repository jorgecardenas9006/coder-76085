import { productModel } from "../models/product.model.js";

export default class ProductManager {
    constructor() {
        this.model = productModel;
    }
    async getAll() {
        return await this.model.find();
    }
    async getByField(parametro) {
        return await this.model.find(parametro);
    }
    async getById(id) {
        return await this.model.findById(id);
    }
    async create(data) {
        return await this.model.create(data);
    }
}

