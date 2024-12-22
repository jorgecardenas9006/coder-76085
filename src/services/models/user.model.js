import mongoose from "mongoose";

const userCollection = 'usuarios'
const simpleParameters = {
    type: String,
    required: true
}

// Definimos los parametros de la colección
const userSchema = new mongoose.Schema({
    nombre: simpleParameters,
    apellido: simpleParameters,
    correo: {
        type: String,
        unique: true,
        required: true
    },
    telefono: simpleParameters,
    password: simpleParameters,
    fecha_de_registro: {
        type: Date,
        default: Date.now
    },
    fecha_de_nacimiento: Date,
    activo: {
        type: Boolean,
        default: false
    },
    rol: {
        type: String,
        default: 'usuario'
    }
})


// Exportamos el modelo de la colección
export const userModel = mongoose.model(userCollection, userSchema);