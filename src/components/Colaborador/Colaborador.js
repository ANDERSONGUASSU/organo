import './Colaborador.css'

export const Colaborador = ({ nome, imagem, cargo, corPrimaria }) => {
    const css = { backgroundColor: corPrimaria };
    return (
        <div className="colaborador">
            <div className="cabecalho" style={css}>
                <img src={imagem} alt={nome} />
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}