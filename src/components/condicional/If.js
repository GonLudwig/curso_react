
export default props => {
    if (props.condicional) {
        return props.children
    } else {
        return false
    }
}