import React, { useState, useEffect } from "react";

import { useParams } from 'react-router-dom'

import api from '../../services/api'

import './styleAbrirFecharModal.css'

function PaginaModal() {

        // Trazendo dados do banco

        const FindId = useParams();
        const idUsuario = new Number(FindId.userId)
    
    
        const [usuarios, setUsuarios] = useState([]);
    
        useEffect(() => {
    
            async function loadUsuarios() {
    
                const response = await api.get(`/associados/${idUsuario}`);
                setUsuarios(response.data);
    
            }
            loadUsuarios();
        }, []);


        // fechar
        function fechar() {
            document.querySelector('.modal').classList.remove('show')
        }    


        
        return (
            <>
                <div className="container">
                    <div className="modal">
                        <div className="botao-fechar">
                            <button className="botao-fechar" onClick={fechar}>&times;</button>
                        </div>
                        <p style={{ fontFamily: 'Roboto' }} className="modal-historico">Nome:ㅤㅤ<span className="subtitulo-modal">{usuarios.nome}</span></p>
                            <p style={{ fontFamily: 'Roboto' }} className="modal-historico">E-mail:ㅤ<span className="subtitulo">{usuarios.email}</span></p>
                            <p style={{ fontFamily: 'Roboto' }} className="modal-historico">CPF:ㅤ<span className="subtitulo">{usuarios.cpf}</span></p>
                            <p style={{ fontFamily: 'Roboto' }} className="modal-historico">Data de Nascimento:ㅤ<span className="subtitulo">{usuarios.dataNascimento}</span></p>
                            {/* <p className="modal-historico">Escolas vinculadas:ㅤ</p>
                                <p className="escolas-associadas" id="subtitulo"> &#9900; Escola 1</p>
                                <p className="escolas-associadas" id="subtitulo"> &#9900; Escola 2</p> */}
                    </div>
                </div>
            </>
        )
    }

export default PaginaModal;