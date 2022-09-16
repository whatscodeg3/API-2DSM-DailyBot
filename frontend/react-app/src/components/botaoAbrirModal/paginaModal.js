import React, { Component } from "react";

import './styleAbrirFecharModal.css'

class PaginaModal extends Component {
    render(){

        // fechar
        function fechar() {
            document.querySelector('.modal').classList.remove('show')
        }

        return(
            <>
                <div className="container">
                    <div className="modal">
                        <div className="botao-fechar">
                            <button className="botao-fechar" onClick={fechar}>&times;</button>
                        </div>
                        <p className="modal-historico">Nome:ㅤ<span className="subtitulo-modal"> Teste Teste Teste</span></p>
                            <p className="modal-historico">Tel:ㅤ<span className="subtitulo"> (xx) xxxxx-xxxx</span></p>
                            <p className="modal-historico">E-mail:ㅤ<span className="subtitulo"> xxxx@gmail.com</span></p>
                            <p className="modal-historico">CPF:ㅤ<span className="subtitulo"> xxx-xxx-xxx-xx</span></p>
                            <p className="modal-historico">Data de Nascimento:ㅤ<span className="subtitulo"> xx/xx/xxxx</span></p>
                            <p className="modal-historico">Escolas vinculadas:ㅤ</p>
                                <p className="escolas-associadas" id="subtitulo"> &#9900; Escola 1</p>
                                <p className="escolas-associadas" id="subtitulo"> &#9900; Escola 2</p>
                                <p className="escolas-associadas" id="subtitulo"> &#9900; Escola 3</p>
                                <p className="escolas-associadas" id="subtitulo"> &#9900; Escola 4</p>
                                <p className="escolas-associadas" id="subtitulo"> &#9900; Escola 4</p>
                                <p className="escolas-associadas" id="subtitulo"> &#9900; Escola 4</p>
                                <p className="escolas-associadas" id="subtitulo"> &#9900; Escola 4</p>
                                <p className="escolas-associadas" id="subtitulo"> &#9900; Escola 4</p>
                                <p className="escolas-associadas" id="subtitulo"> &#9900; Escola 4</p>
                                <p className="escolas-associadas" id="subtitulo"> &#9900; Escola 4</p>
                    </div>
                </div>
            </>
        )
    }
}

export default PaginaModal;