import React from "react";
import { GlobalStyle } from './globalStyles'
import { DivLista, Titulo } from './styles'
import RemoveSearchBar from "../../components/removesearchbar";
import PaginaModal from "../../components/ModalRemover/paginaModal";
import NavBarRemocao from "../../components/navBar/navBarRemocao/index.navBarHome";

function Remocao() {

    return (
        <>
            <GlobalStyle />
            <NavBarRemocao />
            <Titulo>Remoção de associados:</Titulo>
            <DivLista>
                <RemoveSearchBar />
            </DivLista>
        </>
    )
}

export default Remocao;