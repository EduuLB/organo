import CampoTexto from '../CampoTexto'
import Botao from '../Botao'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import { useState } from 'react'

export const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()

        props.aoColaboradorCadastrado({
            nome: nome,
            cargo: cargo,
            imagem: imagem,
            time: time
    })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card o colaborador</h2>
                <CampoTexto 
                obrigatorio={true} 
                label='Nome' 
                placeholder='Digite Seu nome'
                valor={nome}
                aoAlterado = {valor => setNome(valor)}
                />

                <CampoTexto 
                obrigatorio={true} 
                label='Cargo' 
                placeholder='Digite Seu Cargo'
                valor={cargo}
                aoAlterado = {valor => setCargo(valor)}
                />

                <CampoTexto 
                label='Imagem'
                placeholder='Informe o Endereço da imagem'
                valor={imagem}
                aoAlterado = {valor => setImagem(valor)}
                />

                <ListaSuspensa
                label='Time' 
                itens={props.times}
                valor={props.times}
                aoAlterado = {valor => setTime(valor)}
                />

                <Botao>Criar Card</Botao>
            </form>
        </section>

    )
}
