import React, { Component } from "react"


class CadRem extends Component {
    render(){
        return(
            <>
                <section className="cadastro-remocao" id="cad-rem">
                    <div className="botao1" id='keyframe2'>
                        <p className="titulo-cadastro">Deseja <span className="conteudo-secundario-subtitulo">cadastar</span> um <br /> novo associado?</p>
                        <button id="primeiro">Clique Aqui</button>
                    </div>

                    <div className="hr"></div>

                    <div className="botao2" id="keyframe1">
                        <p className="titulo-remover">Deseja <span className="conteudo-secundario-subtitulo">remover</span> um <br /> associado?</p>
                        <button id="botao-remover">Clique Aqui</button>
                    </div>
                </section>
            </>
        )
    }
}

export default CadRem;