import React, { useState, useEffect } from "react";

import './removestyleAbrirFecharModal.css'
import api from '../../services/api';

function PaginaModal() {


        // fechar
        function fechar() {
            document.querySelector('.modal').classList.remove('show')
            
        }    

        async function remover() {
            document.querySelector('.modal').classList.remove('show')

        const response = await api.delete(`/associados/1`);
        console.log(response.data);
        setUsuarios(response.data);
            
        }

        
        return (
            <>
                <div className="container">
                    <div className="modal">
                        <div>
                            <p className="modal-texto">Tem certeza que deseja <br/> excluir este associado?</p>
                            <button className="botao-cancelar" onClick={fechar}>Cancelar</button>
                            <button className="botao-excluir" onClick={remover}>Excluir</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }

export default PaginaModal;