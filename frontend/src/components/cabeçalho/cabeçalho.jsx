import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'

import BotaoAbrirModal from '../botaoAbrirModal/abrir'

import api from '../../services/api'

import { CabecalhoHistorico, ParagrafoNome, SubtituloCabecalho } from './styles'

function Cabeçalho() {

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


    
    
    return (
            <>
                <CabecalhoHistorico>
                    <ParagrafoNome id="nome" style={{ fontFamily: 'Roboto' }}>Nome: <SubtituloCabecalho style={{ fontFamily: 'Roboto' }}>{usuarios.nome}</SubtituloCabecalho></ParagrafoNome>
                    <BotaoAbrirModal />
                </CabecalhoHistorico>
            </>
        )
    }


export default Cabeçalho;