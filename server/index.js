const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

const OrdersModel = require('./models/Orders')
const ProductModel = require('./models/Products')

app.use(express.json())
app.use(cors())


mongoose.connect("mongodb+srv://user_root:a1b2c3@spa.ok2la.mongodb.net/product?retryWrites=true&w=majority", {
    useNewUrlParser: true, useUnifiedTopology: true
})

app.post('/insert/product', async (req, res) => {
    const nome = req.body.nome
    const descricao = req.body.descricao
    const categoria = req.body.categoria
    const preco = req.body.preco
    const desconto = req.body.desconto
    const product = new ProductModel({
        nome: nome, descricao: descricao, categoria: categoria, preco: preco, desconto: desconto
    })
    try {
        await product.save()
        res.send('Produto inserido')
        console.log(nome)
    } catch(err) {
        console.log(err)
    }
})

app.post('/insert/order', async (req, res) => {
    const numero = req.body.numero
    const pedido = req.body.pedido
    const taxaEntrega = req.body.taxaEntrega
    const total = req.body.total
    const order = new OrdersModel({
        numero: numero, pedidos: pedido, totalDesc: 0, taxaEntrega: taxaEntrega, total: total
    })
    try {
        await order.save()
        res.send('Pedido feito')
    } catch(err) {
        console.log(err)
    }
})

app.get('/read', async (req, res) => {
    ProductModel.find({}, (err, result) => {
        if(err){
            console.log(err)
        }
        res.send(result)
    })
})

app.listen(3000, () => {
    console.log('Conectado')
})


// app.post('/insert', async (req, res) => {
//     const produto = req.body.produto
//     const descricao = req.body.descricao
//     const preco = req.body.preco
//     const order = new OrdersModel({ produto: produto, descricao: descricao, preco: preco })
//     try {
//         await order.save()
//         res.send('Dados inseridos')
//     }
//     catch(err) {
//         console.log(err)
//     }
// })