import Axios from 'axios'
import { useEffect, useState } from 'react'
import '../style/PannelProd.css'

export default function PannelProd(params) {

    const [ productList, setProductList ] = useState([])

    useEffect(() => {
        Axios.get("http://localhost:3000/read").then((res) => {
            setProductList(res.data)
        })
    })

    return (
        <div className="product-list">
            <h2>PRODUTOS</h2>
            {productList.map((prod, key) => 
                <div className="item-lista-produtos" key={key}>
                    <p>{prod.nome} | {prod.descricao} | 
                    {prod.categoria} | R$ {prod.preco} | {prod.desconto} (%) <br /><button>Excluir</button> </p>
                </div>
            )}
        </div>
    )
}

