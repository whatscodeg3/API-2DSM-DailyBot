import React, { useState, useEffect } from 'react'

import BotaoAbrirModal from '../botaoAbrirModal/abrir'

import api from '../../services/api'

import { CabecalhoHistorico, ParagrafoNome, SubtituloCabecalho } from './styles'

function Cabeçalho() {

    const [usuarios, setUsuarios] = useState({});

    useEffect(() => {

        async function loadUsuarios() {
            const response = await api.get("/associados/:id");
            console.log(response.data);
            setUsuarios(response.data);
        }
        loadUsuarios();
    }, []);

    const userName = <p>{usuarios.nome}</p>

    return (
            <>
                <CabecalhoHistorico>
                    <ParagrafoNome id="nome">Nome: <SubtituloCabecalho>{userName}</SubtituloCabecalho></ParagrafoNome>
                    <BotaoAbrirModal />
                </CabecalhoHistorico>
            </>
        )
    }


export default Cabeçalho;