import mongoose from "mongoose";

const userCollection = 'usuarios';

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: {
        type: String,
        enum: ['admin', 'user'],
        required: true
    },
    active: Boolean
});

export const userModel = mongoose.model(userCollection, userSchema);