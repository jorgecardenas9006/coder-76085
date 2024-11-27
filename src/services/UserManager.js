import fs, { stat } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import { get } from 'http';

//obtener la ruta del archivo
const __filename = fileURLToPath(import.meta.url);

//obtener la ruta de la carpeta actual
const __dirname = path.dirname(__filename);

//ruta del archivo de productos
const productsFilePath = path.join(__dirname, '../../data/users.json');

export default class UserManager {
    //constructor
    constructor() {
        this.users = [];
        this.readUsers();
    }

    //read users
    async readUsers() {
        try {
            this.users = JSON.parse(await fs.promises.readFile(productsFilePath, 'utf-8'));
        }
        catch (error) {
            this.users = [];
            console.log(error);
        }
    }

    //with users
    writeUsers() {
        try {
            fs.promises.writeFile(productsFilePath, JSON.stringify(this.users, null, 2));
        }
        catch (error) {
            console.log(error);
        }
    }

    //get all users
    async getAllUsers(limit) {
        try {
            if (limit) {
                return this.users.slice(0, limit);
            }
            return this.users;
        }
        catch (error) {
            throw error;
        }
    }

    //get user by id
    async getUserById(id) {
        try {
            const user = this.users.find(user => user.id === parseInt(id));
            if (!user) {
                throw new Error('User not found');
            }
            return user;
        }
        catch (error) {
            throw error;
        }
    }

    //crear usuario
    async createUser(user) {
        try {
            const lastUser = this.users[this.users.length - 1];
            user.id = lastUser ? lastUser.id + 1 : 1;
            this.users.push(user);
            this.writeUsers();
        }
        catch (error) {
            throw error;
        }
    }




}