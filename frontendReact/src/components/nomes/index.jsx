import React, { useState, useEffect } from "react";
import './nomes.styled.css'
import api from '../../services/api';
import { Link } from "react-router-dom"


// class UlNomes extends Component

function UlNomes() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {

        async function loadUsuarios() {
            const response = await api.get("/associados");
            console.log(response.data);
            setUsuarios(response.data.rows);
        }
        loadUsuarios();
    }, []);

    const listUsers = usuarios.map((usuario) => <li className="titulo-pesquisa" key={usuario.nome}>
        <Link to={`/historico/${usuario.id}`}>{usuario.nome}</Link>
    </li>)

    return (
        <>
            <ul id="lista_para_busca" className="ul_class">
                {listUsers}
            </ul>
        </>
    )
}


export default UlNomes;