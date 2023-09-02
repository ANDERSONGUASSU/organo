import './ListaSuspensa.css'

export const ListaSuspensa = (props) => {
    console.log(props.itens)
    return (
        <div>
            <label htmlFor="">
                {props.label}
            </label>
            <select name="" id="">
                {props.itens.map(item => <option>{item}</option>)}
            </select>
        </div>
    )
}