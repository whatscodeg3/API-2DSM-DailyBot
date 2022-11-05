import React, { useState, useEffect } from "react";
import api from '../../services/api';

import './removestyleAbrirFecharModal.css'


function PaginaModal({ id }) {
    console.log(id)
    // fechar
    function fechar() {
        document.querySelector('.modal').classList.remove('show')

    }
    async function remover() {
        document.querySelector('.modal').classList.remove('show')

        await api.delete(`/associados/${id}`);
    }


    return (
        <>
            <div className="container">
                <div className="modal">
                    <div>
                        <p className="modal-texto">Tem certeza que deseja <br /> excluir este associado?</p>
                        <button className="botao-cancelar" onClick={fechar}>Cancelar</button>
                        <button className="botao-excluir" onClick={() => remover()}>Excluir</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaginaModal;