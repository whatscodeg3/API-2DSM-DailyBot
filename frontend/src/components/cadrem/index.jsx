import React from "react"

import { Cadastrar, Titulo, Section, Hr } from "./style"

import { Link } from 'react-router-dom'

function CadRem() {
    return (
        <>
            <Section id="cad-rem">
                <Cadastrar id='cad-rem'>
                    <Titulo >Deseja <span>cadastar</span> um <br /> novo associado?</Titulo>
                    <Link to={'/cadastro'}><button id="primeiro">Clique Aqui</button></Link>
                </Cadastrar>

                <Hr></Hr>

                <Cadastrar id="keyframe1">
                    <Titulo >Deseja <span className="conteudo-secundario-subtitulo">remover</span> um <br /> associado?</Titulo>
                    <Link to={'/remocao'}><button id="primeiro">Clique Aqui</button></Link>
                </Cadastrar>
            </Section>
        </>
    )
}


export default CadRem;