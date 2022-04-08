
export default props => {
    const callBack = props.envioIndireto

    return (
        <div>
            <div>Filho</div>
            <button onClick={_ => callBack("Lucas", 22, false)}>
                Enviar informacoes para o Pai</button>
        </div>
    )
}