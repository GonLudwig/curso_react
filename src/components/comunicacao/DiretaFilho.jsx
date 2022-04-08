
export default props => {
    return(
        <div>
            <span>{props.nome} </span>
            <span><strong>{props.idade}</strong> </span>
            <span>{props.nerd ? 'Nerd' : 'Safadao'} </span>
        </div>
    )
}