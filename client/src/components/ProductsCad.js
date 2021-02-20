import Axios from 'axios'
import { useState } from 'react'
import '../style/ProductsCad.css'

export default function ProductsCad(props) {

    const [ nome, setNome ] = useState('')
    const [ descricao, setDescricao ] = useState('')
    const [ categoria, setCategoria ] = useState('')
    const [ preco, setPreco ] = useState('')
    const [ desconto, setDesconto ] = useState('')

    const addItems = () => {
        Axios.post("http://localhost:3000/insert/product", { 
        nome: nome,
        descricao: descricao,
        categoria: categoria,
        preco: preco,
        desconto: desconto
     })
     console.log('Registro feito')
    }

    return (
        <div className="form-criar-prod">
            <h2>CADASTRO DE PRODUTO</h2>
            <form>
                <label >Produto: </label>
                <input type="text" className="input" onChange={(e) => {setNome(e.target.value)}}></input><br />
                <label className="label-textarea">Descrição </label>
                <textarea type="text" className="input" onChange={(e) => {setDescricao(e.target.value)}}></textarea><br />
                <label>Categoria: </label>
                <input type="number" className="input"
                 onChange={(e) => {setCategoria(e.target.value)}} ></input><br />
                <label>Preço: </label>
                <input type="number" className="input" 
                 onChange={(e) => {setPreco(e.target.value)}}></input><br />
                <label>Desconto: </label>
                <input type="number" className="input"
                 onChange={(e) => {setDesconto(e.target.value)}} ></input><br /><br></br><hr />
                <button className="input" onClick={addItems}>Incluir</button><br /><br />
            </form>
        </div>
    )
}