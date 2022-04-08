import './Input.css'
import { useState } from "react"

export default props => {
    const [valor, setValor] = useState('Nenhum')

    function MudarValor(e) {
        setValor(e.target.value)
    }

    return (
        <div className="ComponenteControlado">
                <h2>{valor}</h2>
            <div className="Inputs">
                <p>Input Controlado</p>
                <input value={valor} onChange={MudarValor} />
                <p>Input ReadOnly</p>
                <input value={valor} readOnly />
                <p>Input Sem Controle</p>
                <input value={undefined} />
            </div>
        </div>
    )
}