import If from "./If"

export default props => {
    const usuario = props.usuario || {}

    return (
        <div>
            <If condicional={usuario && usuario.nome}>
                Seja bem vindo <strong>{usuario.nome}</strong>!
            </If>
            <If condicional={!usuario || !usuario.nome}>
                Seja bem vindo <strong>Amigao</strong>!
            </If>
        </div>
    )
}