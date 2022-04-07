import produtos from "../../data/produtos"

import "./ListaProduto.css"

export default props => {
    const td = produtos.map((produtos, i) => {
    let preco = produtos.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
        return(
            <tr key={produtos.id} className={i % 2 == 0 ? 'Par' : ''}>
                <td>{produtos.id}</td>
                <td>{produtos.nome}</td>
                <td>{preco}</td>
            </tr>
        )
    })

    return (
        <div className="TabelaProtudos">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Produto</th>
                        <th>Preco</th>
                    </tr>
                </thead>
                <tbody>
                    {td}
                </tbody>
            </table>
        </div>
    )
}