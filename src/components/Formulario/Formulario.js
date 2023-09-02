import CampoTexto from '../CampoTexto'
import { ListaSuspensa } from '../ListaSuspensa/ListaSuspensa'
import './Formulario.css'

export const Formulario = () => {
    return (
        <section className='formulario'>
            <form action="">
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o enderço da imagem" />
                <ListaSuspensa/>
            </form>
        </section>
    )
}