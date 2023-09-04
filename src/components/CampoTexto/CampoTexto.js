import './CampoTexto.css'

export const CampoTexto = (props) => {
    const placeholderModificada = `${props.placeholder}...`



    // let valor = 'Guilherme silveira'
    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label htmlFor="">{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} type="text" placeholder={placeholderModificada} />
        </div>
    )
}
