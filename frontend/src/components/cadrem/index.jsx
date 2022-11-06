import React from "react"

import { Cadastrar, Titulo, Section,Hr } from "./style"

import { Link } from 'react-router-dom'

function CadRem() {
    return (
        <>
            <Section className="cadastro-remocao" id="cad-rem">
                <Cadastrar className="botao1" id='cad-rem'>
                    <Titulo className="titulo-cadastro">Deseja <span>cadastar</span> um <br /> novo associado?</Titulo>
                    <Link to={`/cadastro`}><button id="primeiro">Clique Aqui</button></Link>
                </Cadastrar>

                <Hr></Hr>

                <Cadastrar className="botao2" id="keyframe1">
                    <Titulo className="titulo-remover">Deseja <span className="conteudo-secundario-subtitulo">remover</span> um <br /> associado?</Titulo>
                    <Link to={`/remocao`}><button id="primeiro">Clique Aqui</button></Link>
                </Cadastrar>
            </Section>
        </>
    )
}


export default CadRem;