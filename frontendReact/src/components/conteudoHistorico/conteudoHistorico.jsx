import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import api from '../../services/api'

import { ConteudoPrincipal, Details, Summary, DivInput, InputButton, Trecho, Linha, ConteudoDatails } from './styles'

function Conteudo() {

    // Trazendo informações do banco

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

    const listProcess = processos.map((processo) => (
        <Details key={processo}>
          <Summary>
            <p>{processo.dataProcesso}</p>
            <DivInput>
              <InputButton type="button" value="Relatório" onClick={gerarpdf()} />
              <InputButton type="button" value="Link" />
            </DivInput>
          </Summary>
          <ConteudoDatails>
            <Linha />
            <Trecho>{processo.conteudo}</Trecho>
          </ConteudoDatails>
        </Details>
    ));




    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {

        async function loadUsuarios() {

            const response = await api.get(`/associados/${idUsuario}`);
            setUsuarios(response.data);

        }
        loadUsuarios();
    }, []);


    // Opção Relatório

    dataMencao = '25/04/2021'
    nomeCaderno = 'executivo 1'
    nomeProfessor = 'Daniel Machado de Carvalho'
    emailProfessor = 'danielmachado@gmail.com'


    textoPdf = '8529183/1 EDSON MASANORI TAKEDA NIVEL III 4 ANSM14 18/07/2022'

    function gerarpdf(){
        var doc = new jsPDF()
               
        doc.text('Sindicato dos professores', 10, 15)
        doc.text(`Relatório do dia ${nomeProfessor}`, 120, 15)

        var strArr = doc.splitTextToSize(`No dia ${nomeProfessor} houve uma menção no caderno ${nomeProfessor} ao professor ${nomeProfessor}, que foi enviado para o e-mail de contato ${nomeProfessor} pela equipe do sindicato atráves desse relatório, segue adiante o trecho encontrado de menção.`, 190)
        doc.text(strArr, 10, 30);

        var strArr = doc.splitTextToSize(textoPdf, 190)
        doc.text(strArr, 10, 60);

        doc.save('relatorio.pdf')
    }

    // Listando dados do banco

    return (
        <>
            <ConteudoPrincipal>
                    {listProcess}                    
            </ConteudoPrincipal>
        </>
    )
}

export default Conteudo;