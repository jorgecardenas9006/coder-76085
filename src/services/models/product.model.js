import mongoose from "mongoose";

const productCollection = 'productos'
const simpleParameters = {
    type: String,
    required: true
}
const simpleNumberParameters = {
    type: Number,
    required: true
}
const simpleArrayParameters = {
    type: [String],
    required: true
}
const simpleBooleanParameters = {
    type: Boolean,
    required: true
}

// Definimos los parametros de la colección
const productSchema = new mongoose.Schema({
    nombre: simpleParameters,
    categoria: simpleParameters,
    consola: {
        plataformas: simpleArrayParameters,
        tipos: simpleArrayParameters
      },
      edadRecomendada: simpleNumberParameters,
      precio: simpleNumberParameters,
      adicionales: {
        multiplayer: simpleBooleanParameters,
        expansiones: simpleArrayParameters
      },
      img: simpleParameters,
      descripcion: simpleParameters
});

// Exportamos el modelo de la colección
export const productModel = mongoose.model(productCollection, productSchema);