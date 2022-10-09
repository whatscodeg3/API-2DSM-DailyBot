import React, { useState, useEffect } from 'react'

import BotaoAbrirModal from '../botaoAbrirModal/abrir'

import api from '../../services/api'

import { CabecalhoHistorico } from './styles'
import { SubtituloCabecalho } from './styles'

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
    const userCpf = <p>{usuarios.cpf}</p>
    const userEmail = <p>{usuarios.email}</p>

    return (
            <>
                <CabecalhoHistorico>
                    <p id="nome">Nome: <SubtituloCabecalho>{userName}</SubtituloCabecalho></p>
                    <p id="tel">Cpf: <SubtituloCabecalho>{userCpf}</SubtituloCabecalho></p>
                    <p id="email">E-mail: <SubtituloCabecalho>{userEmail}</SubtituloCabecalho></p>
                    <BotaoAbrirModal />
                </CabecalhoHistorico>
            </>
        )
    }


export default Cabeçalho;