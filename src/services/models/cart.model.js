import mongoose from "mongoose";

const cartCollection = 'cart'

// Definimos los parametros de la colección
const cartSchema = new mongoose.Schema({
    usuarios: {
        type:[{
            usuario: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'usuarios'
            }
        }],
        default: []
    },
    productos: [{
        type: [
            {
                producto: {
                    type: mongoose.Schema.Types.ObjectId,
                    required: true,
                    ref: 'productos'
                },
                cantidad: { 
                    type: Number, 
                    required: true, 
                    default: 1
                }
            }
        ]
    }],
    total: {
        type: Number,
        required: true
    }
})


// Definimos el modelo
export const cartModel = mongoose.model(cartCollection, cartSchema);