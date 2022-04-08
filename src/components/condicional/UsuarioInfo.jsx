import If, {Else} from "./If"

export default props => {
    const usuario = props.usuario || {}

    return (
        <div>
            <If condicional={usuario && usuario.nome}>
                Seja bem vindo <strong>{usuario.nome}</strong>!
                <Else condicional={!usuario || !usuario.nome}>
                    Seja bem vindo <strong>Amigao</strong>!
                </Else>
            </If>
        </div>
    )
}