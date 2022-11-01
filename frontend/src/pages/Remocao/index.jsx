import React from "react";
import { GlobalStyle } from './globalStyles'
import { DivLista, Titulo } from './styles'
import RemoveSearchBar from "../../components/removesearchbar";
import PaginaModal from "../../components/ModalRemover/paginaModal";

function Remocao() {

    return (
        <>
            <GlobalStyle />
            <Titulo>Remoção de associados:</Titulo>
            <DivLista>
                <RemoveSearchBar />
            </DivLista>
        </>
    )
}

export default Remocao;