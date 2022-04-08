import DiretaFilho from "./DiretaFilho"

export default props => {
    return (
        <div>
            <DiretaFilho nome="Matheus" idade={21} nerd={false}/>
            <DiretaFilho nome="Ellifas" idade={23} nerd={true}/>
        </div>
    )
}