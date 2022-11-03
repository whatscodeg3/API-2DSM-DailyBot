import React, { useState, useEffect } from "react";
import api from '../../services/api';

import './removestyleAbrirFecharModal.css'


function PaginaModal() {

        // fechar
        function fechar() {
            document.querySelector('.modal').classList.remove('show')
                
        }   

        const [usuarios, setUsuarios] = useState([]);

        useEffect(() => {

            async function loadUsuarios() {
                const response = await api.get(`/associados/`);
                console.log(response.data);
                setUsuarios(response.data);
            }
            loadUsuarios();
        }, []);
        

        const lista = usuarios.map((usuario) => usuario.id)
        console.log(listUsers) 

        


        async function remover() {
            document.querySelector('.modal').classList.remove('show')

        const resposta = await api.delete(`/associados/${lista}`);
        console.log(resposta.data);
            
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