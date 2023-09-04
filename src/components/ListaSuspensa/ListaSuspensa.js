import "./ListaSuspensa.css";

export const ListaSuspensa = (props) => {
    return (
        <div className="lista-suspensa">
            <label htmlFor="">{props.label}</label>
            <select
                onChange={evento => props.aoAlterado(evento.target.value)}
                value={props.value}
                name=""
                id=""
                required={props.obrigatorio}
            >
                {props.itens.map((item) => (
                    <option key={item}>{item}</option>
                ))}
            </select>
        </div>
    );
};
