import React, { useState, useEffect } from "react";
import './nomes.styled.css'
import api from '../../services/api';
import { Link } from "react-router-dom"
import BotaoAbrirModal from "../ModalRemover/abrir"
import PaginaModal from "../ModalRemover/paginaModal"


// class UlNomes extends Component

function RENomes() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {

        async function loadUsuarios() {
            const response = await api.get("/associados");
            console.log(response.data);
            setUsuarios(response.data);
        }
        loadUsuarios();
    }, []);
    
    
    const listUsers = usuarios.map((usuario) => <li className="titulo-pesquisa" key={usuario.nome}>
        <BotaoAbrirModal/> <Link to={`/${usuario.id}`}>{usuario.nome}</Link> <PaginaModal />
    </li>)

    return (
        <>
            <ul id="lista_para_busca" className="ul_class">
                {listUsers}
            </ul>
        </>
    )
}


export default RENomes;