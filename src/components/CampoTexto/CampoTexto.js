import './CampoTexto.css'
export const CampoTexto = (props) => {
    const placeholderModificada = `${props.placeholder}...`
    
    return (
        <div className="campo-texto">
            <label htmlFor="">{props.label}</label>
            <input type="text" placeholder={placeholderModificada} />
        </div>
    )
}
