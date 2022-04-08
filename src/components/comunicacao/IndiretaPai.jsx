import { useState } from "react"
import IndiretaFilho from "./IndiretaFilho"

export default props => {
    const [nome, setNome] = useState("?")
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)

    function receberInformacoesIndiretas(nome, idade, nerd) {
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }

    return (
        <div>
            <div>Pai</div>
            <span>{nome} </span>
            <span>{idade} </span>
            <span>{nerd ? 'Nerd' : 'Safadao'} </span>
            <IndiretaFilho envioIndireto={receberInformacoesIndiretas}></IndiretaFilho>
        </div>
    )
}