import React, { useState, useEffect } from "react";
import { api } from '../../services/api';
import { Link } from "react-router-dom"
import PaginaModal from "../ModalRemover/paginaModal"
import { Ul_class, TituloPesquisa, BotaoModal } from './styles'




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
            <Ul_class id="lista_para_busca">
                {usuarios.map((usuario) => (
                    <TituloPesquisa key={usuario.id} >
                        <BotaoModal type="button" value="Excluir" className="botao-modal" onClick={() => abrir(usuario.id)}></BotaoModal>
                        <Link to={`/${usuario.id}`}>{usuario.nome}</Link>
                        <PaginaModal id={id} />
                    </TituloPesquisa>
                ))}
            </Ul_class>
        </>
    )
}


export default RENomes;