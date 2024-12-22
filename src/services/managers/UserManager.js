import { userModel } from '../models/user.model.js';

export default class UserManager{
    constructor() {
        this.userModel = userModel;
    }
    async getAll() {
        return await this.userModel.find();
    }
    async getById(id) {
        return await this.userModel.findById(id);
    }
    async getByField(fields) {
        return await this.userModel.find(fields);
    }
    async create(data) {
        return await this.userModel.create(data);
    }
}
