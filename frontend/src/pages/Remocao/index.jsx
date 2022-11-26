import React from "react";
import { GlobalStyle } from './globalStyles'
import { DivLista, Titulo, DivPrincipal, PosicaoTitulo } from './styles'
import RemoveSearchBar from "../../components/removesearchbar";
import PaginaModal from "../../components/ModalRemover/paginaModal";
import NavBarRemocao from "../../components/navBar/navBarRemocao/index.navBarHome";

function Remocao() {

    return (
        <>
            <GlobalStyle />
            <NavBarRemocao />
            <DivPrincipal>
                <PosicaoTitulo>
                    <Titulo>Remoção de associados:</Titulo>
                </PosicaoTitulo>
                <DivLista>
                    <RemoveSearchBar />
                </DivLista>
            </DivPrincipal>
        </>
    )
}

export default Remocao;