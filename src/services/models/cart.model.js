import mongoose from "mongoose";

const cartCollection = 'cart'

// Definimos los parametros de la colección
const cartSchema = new mongoose.Schema({
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'usuarios'
    },
    products: [{
        product_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: false
        },
        quantity: {
            type: Number,
            required: false
        },
        price: {
            type: Number,
            required: false
        },
        total: {
            type: Number,
            required: false
        }
    }]
})

// Definimos el modelo
export const cartModel = mongoose.model(cartCollection, cartSchema);