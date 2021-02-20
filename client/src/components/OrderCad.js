import React from 'react'
import Axios from 'axios'
import { useEffect, useState } from 'react'
import '../style/OrderCad.css'

export default function OrderCad(params) {

    const [ numero, setNumero ] = useState('')
    const [ pedido, setPedido ] = useState([])
    const [ taxaEntrega, setTaxaEntrega] = useState('')
    const [ total, setTotal ] = useState(0)
    const [ prodList, setProList ] = useState([])
    const [ input, setInput ] = useState('')
    const [ subTotal, setSubTotal ] = useState([])
    const [ totalMaisTaxa, setTotalMaisTaxa ] = useState([])
    let itemsInput= prodList

    useEffect(() => {
        Axios.get("http://localhost:3000/read").then((res) => {
            setProList(res.data)
        })
    })

    const addOrder = (e) => {
        totalMaisTaxa.push(total)
        totalMaisTaxa.push(taxaEntrega)
        let contTotal = totalMaisTaxa.reduce(function(contTotal, num){
            return contTotal + num
        }, 0)
        Axios.post("http://localhost:3000/insert/order", {
        numero: numero, pedido: pedido, taxaEntrega: taxaEntrega, total: totalMaisTaxa
         })
        if(numero !== '') {
        setTotalMaisTaxa(contTotal)
        alert(contTotal)
        }
    }

    const addPedido = (e, prod) => {
        e.preventDefault()
        pedido.push(prod._id)
        subTotal.push(prod.preco)
        let contTotal = subTotal.reduce(function(contTotal, num){
            return contTotal + num
        }, 0)
        setTotal(contTotal)
        setNumero(new Date().getTime())
        alert(`Item ${prod.nome} inserido`)
    }

    const handleInput = (e) => {
        e.preventDefault()
        setInput(e.target.value)
    }

    if(input.length !== 0) {
        if(input.length > 0) {
            itemsInput = prodList.filter(prod => {
                return prod.nome.match(input)
            })
        }
    } else {
        itemsInput = []
    }
    

    return (
        <div className="order-form">
            <h2>DADOS DO PEDIDO</h2>
            <form>
                <label>Numero: </label>
                <input type="text" className="input" value={numero} disabled></input><br /><br />
                <label>Item: </label>
                <input type="text" className="input" onChange={handleInput}
                 value={input} placeholder="Digite para pesquisar"></input><br /><br />
                {
                    itemsInput.map((prod, key) => 
                    <div key={key}>
                        <p>{prod.nome} | {prod.descricao} | R$ {prod.preco} 
                        <button onClick={(e) => addPedido(e, prod)}>Adicionar</button> </p>
                    </div>)
                }
                <label>Taxa de entrega: </label>
                <input type="number" className="input" onChange={(e) => {setTaxaEntrega(e.target.value)}} ></input><br /><br />
                <label>Total: </label>
                <input type="text" className="input" value={total} disabled></input><br /><br /><hr /><br />
                <button onClick={addOrder} className="input">Enviar Pedido</button>
            </form>
        </div>
    )
}