const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
    },
    categoria: {
        type: Number,
    },
    preco: {
        type: Number,
    },
    desconto: {
        type: Number,
    }
})

const Products = mongoose.model("Product", ProductSchema)
module.exports = Products