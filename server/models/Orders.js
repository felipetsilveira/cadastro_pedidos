const mongoose = require('mongoose')

const OrdersSchema = new mongoose.Schema({
    numero: {
        type: Number,
        required: true,
    },
    pedidos: {
        type: Array,
    },
    totalDesc: {
        type: Number,
    },
    taxaEntrega: {
        type: Number,
    },
    total: {
        type: Number
    }
})

const Orders = mongoose.model("Orders", OrdersSchema)
module.exports = Orders