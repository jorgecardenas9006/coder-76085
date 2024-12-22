import mongoose from "mongoose";

const cartCollection = 'cart'

// Definimos los parametros de la colección
const cartSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    products: [{
        product_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        total: {
            type: Number,
            required: true
        }
    }]
})

// Definimos el modelo
export const cartModel = mongoose.model(cartCollection, cartSchema);