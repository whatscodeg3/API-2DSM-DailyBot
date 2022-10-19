import React from "react"

import { Cadastrar, Titulo } from "./style"

import { Link } from 'react-router-dom'

function CadRem() {
    return (
        <>
            {/* <section className="cadastro-remocao" id="cad-rem"> */}
                <Cadastrar className="botao1" id='cad-rem'>
                    <Titulo className="titulo-cadastro">Deseja <span>cadastar</span> um <br /> novo associado?</Titulo>
                    <Link to={`/cadastro`}><button id="primeiro">Clique Aqui</button></Link>
                </Cadastrar>

                {/* <div className="hr"></div>

                <div className="botao2" id="keyframe1">
                    <p className="titulo-remover">Deseja <span className="conteudo-secundario-subtitulo">remover</span> um <br /> associado?</p>
                    <button id="botao-remover">Clique Aqui</button>
                </div>
            </section> */}
        </>
    )
}


export default CadRem;