import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import api from '../../services/api'

import { ConteudoPrincipal, Details, Summary, DivInput, InputButton, Trecho, Linha, ConteudoDatails, BackButton, Icon, DivButton } from './styles'

function Conteudo() {

    // Trazendo informações do banco

    // Puxando Informações de Exibição
    const FindId = useParams();
    const idUsuario = new Number(FindId.userId)


    const [processos, setProcessos] = useState([]);

    useEffect(() => {

        async function loadProcessos() {

            const response = await api.get(`/processos/users/${idUsuario}`);
            setProcessos(response.data);

        }
        loadProcessos();
    }, []);




    // Puxando Informações do Relatório

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {

        async function loadUsuarios() {

            const response = await api.get(`/associados/${idUsuario}`);
            setUsuarios(response.data);

        }
        loadUsuarios();
    }, []);

    

    // Opção Relatório

    var nomeProfessor = usuarios.nome
    var emailProfessor = usuarios.email

     function gerarpdf(id){
        var doc= new jsPDF({format: [2500, 600],});
        const processoUnico = processos.find(processoId => processoId.id === id)

        var date = new Date()
        var dataDia = date.toLocaleDateString()

        doc.text('Sindicato dos professores', 10, 15)
        doc.text(`Relatório do dia ${dataDia}`, 130, 15)

		var strArr = doc.splitTextToSize(`No dia ${processoUnico.dataProcesso} houve uma menção no caderno ${processoUnico.caderno} ao professor ${nomeProfessor}, que foi enviado para o e-mail de contato ${emailProfessor} pela equipe do sindicato atráves desse relatório, segue adiante o trecho encontrado de menção.`, 190)
        doc.text(strArr, 10, 30);

        var strArr = doc.splitTextToSize(processoUnico.conteudo, 190)
        doc.text(strArr, 10, 60);

        doc.save('relatorio.pdf')
    }

    // Retornando valores na tela

    if(processos == 'null') {
        return (
            <>
                <ConteudoPrincipal>
                    <p>Não foi encontrado nenhum processo!</p>
                </ConteudoPrincipal>
            </>
        )
    } else {
        const listProcess = processos.map((processo) => (
            <Details key={processo}>
              <Summary>
                <p>{processo.dataProcesso}</p>
                <DivInput>
                  <InputButton type="button" value="Relatório" onClick={() => gerarpdf(Number(processo.id))} />
                  <InputButton type="button" value="Link" onClick={() => {return window.open(processo.link, '_blank')}} />
                </DivInput>
              </Summary>
              <ConteudoDatails>
                <Linha />
                <Trecho>{processo.conteudo}</Trecho>
              </ConteudoDatails>

                {/* VER ISSO */}
              <DivButton href="#menu">
                    <BackButton><Icon><ion-icon name="arrow-up"></ion-icon></Icon></BackButton>
              </DivButton>

            </Details>
        ));
        return (
            <>
                <ConteudoPrincipal>
                    {listProcess}
                    <DivButton>
                        <Link to={`/`}><BackButton><Icon><ion-icon name="arrow-back"></ion-icon></Icon></BackButton></Link>
                    </DivButton>
                </ConteudoPrincipal>
            </>
        )
    }
}

export default Conteudo;