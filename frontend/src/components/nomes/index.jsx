import React, { useState, useEffect } from "react";
import './nomes.styled.css'
import { api } from '../../services/api';
import { Link } from "react-router-dom"
// import { UlClass } from './style'

// class UlNomes extends Component

function UlNomes() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        async function loadUsuarios() {
            const response = await api.get("/associados");
            setUsuarios(response.data);
        }
        loadUsuarios();
    }, []);


    const [processos, setProcessos] = useState([]);
    useEffect(() => {
        async function loadProcessos() {
            const response = await api.get(`/processos`);
            setProcessos(response.data);
        }
        loadProcessos();
    }, []);

    const listUsers = usuarios.map((usuario) => {
        let cor;
        for(let processo of processos){
            cor = 'semprocesso.svg'
            if(processo.associadoId == usuario.id && processo.emailEnviado == 0){
                cor = 'vermelho.svg'
                break
            }else if(processo.associadoId == usuario.id && processo.emailEnviado == 1){
                cor = 'verde.svg'
                break
            }
        };

        if(usuario.nome != 'adm'){
            return(
                <li className="titulo-pesquisa" key={usuario.nome}>
                    {/* <img src={`./src/assets/img/${cor}`}/> */}
                    <div><Link className="nome" to={`/${usuario.id}`}>{usuario.nome}</Link></div>
                </li>
            )
        }
    })


    return (
        <>
            <ul id="lista_para_busca" className="ul_class">
                {listUsers}
            </ul>
        </>
    )
}


export default UlNomes;