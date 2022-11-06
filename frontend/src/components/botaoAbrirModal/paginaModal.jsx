import React, { useState, useEffect } from "react";

import { useParams } from 'react-router-dom'

import './styleAbrirFecharModal.css'
import { Modal, BotaoFecharModal, Container, Paragrafo, Escola } from './style.js'

import api from '../../services/api'


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
                <Container>
                    <Modal className="modal">
                        <div className="botao-fechar">
                            <BotaoFecharModal onClick={fechar}>&times;</BotaoFecharModal>
                        </div>
                        <Paragrafo style={{ fontFamily: 'Roboto' }}>Nome:ㅤㅤ<span className="subtitulo-modal">{usuarios.nome}</span></Paragrafo>
                            <Paragrafo style={{ fontFamily: 'Roboto' }}>E-mail:ㅤ<span className="subtitulo">{usuarios.email}</span></Paragrafo>
                            <Paragrafo style={{ fontFamily: 'Roboto' }}>CPF:ㅤ<span className="subtitulo">{usuarios.cpf}</span></Paragrafo>
                            <Paragrafo style={{ fontFamily: 'Roboto' }}>Data de Nascimento:ㅤ<span className="subtitulo">{usuarios.dataNascimento}</span></Paragrafo>
                            {/* <Escola className="modal-historico">Escolas vinculadas:ㅤ</Escola>
                                <Escola className="escolas-associadas" id="subtitulo"> &#9900; Escola 1</Escola>
                                <Escola className="escolas-associadas" id="subtitulo"> &#9900; Escola 2</Escola> */}
                    </Modal>
                </Container>
            </>
        )
    }

export default PaginaModal;