import React, { Component } from "react"
import SearchIcon from '../../assets/img/search-icon.svg'

import UlNomes from "../nomes"

import { Search } from './styles'
import { SearchOption } from './styles'
import { Imagem } from './styles'
import { Txt } from './styles'
import { Nomes } from './styles'

function SearchBar() {

    const pesquisa = () => {
        const searchbox = document.getElementById('barra_pesquisa').value.toUpperCase();
        const lista = document.getElementById('lista_para_busca');
        const listaItens = lista.getElementsByTagName('li');
        const listaItensNomes = lista.getElementsByTagName('a');

        for (var i = 0; i < listaItensNomes.length; i++) {
            let match = listaItens[i].getElementsByTagName('a')[0];

            if (match) {
                let textValue = match.textContent || match.innerHTML

                if (textValue.toUpperCase().indexOf(searchbox) > -1) {
                    listaItens[i].style.display = "";
                } else {
                    listaItens[i].style.display = "none";
                }
            }
        }
    }

    return (
        <>
            <Search id="pesquisa">
                <SearchOption id="keyframe5">
                    <Imagem src={SearchIcon} alt="search-icon" />
                    <Txt type="search" className="txt" placeholder="Digite aqui..." id="barra_pesquisa" onKeyUp={pesquisa} />
                </SearchOption>

                <Nomes>
                    <UlNomes />
                </Nomes>
            </Search>
        </>
    )

}

export default SearchBar;