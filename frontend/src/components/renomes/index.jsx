import React, { useState, useEffect } from "react";
import './nomes.styled.css'
import api from '../../services/api';
import { Link } from "react-router-dom"
import BotaoAbrirModal from "../ModalRemover/abrir"
import PaginaModal from "../ModalRemover/paginaModal"
import '../ModalRemover/removestyleAbrirFecharModal.css'


// class UlNomes extends Component

function RENomes() {
    const [usuarios, setUsuarios] = useState([]);
    const [id, setId] = useState(0);

    useEffect(() => {
        async function loadUsuarios() {
            const response = await api.get("/associados");
            setUsuarios(response.data);
        }
        loadUsuarios();
        console.log(usuarios)
    }, []);

    function abrir(id) {
        setId(id)
        document.querySelector('.modal').classList.add('show')
    }



    return (
        <>
            <ul id="lista_para_busca" className="ul_class">
                {usuarios.map((usuario) => (
                    <li className="titulo-pesquisa" key={usuario.id} >
                        <input type="button" value="Excluir" className="botao-modal" onClick={() => abrir(usuario.id)}></input>
                        <Link to={`/${usuario.id}`}>{usuario.nome}</Link>
                        <PaginaModal id={id} />
                    </li>
                ))}
            </ul>
        </>
    )
}


export default RENomes;