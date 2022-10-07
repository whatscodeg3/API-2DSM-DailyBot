import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import api from '../../services/api'

import { ConteudoPrincipal, Details, Summary, DivInput, InputButton, Trecho, Linha, ConteudoDatails } from './styles'

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

    const listProcess = processos.map((processo) => (
        <Details key={processo}>
          <Summary>
            <p>{processo.dataProcesso}</p>
            <DivInput>
              <InputButton type="button" value="Relatório" onClick={gerarpdf} />
              <InputButton type="button" value="Link" />
            </DivInput>
          </Summary>
          <ConteudoDatails>
            <Linha />
            <Trecho>{processo.conteudo}</Trecho>
          </ConteudoDatails>
        </Details>
    ));


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

    const dataProcesso = processos.map((elemento) => (
        elemento.dataProcesso
    ));

    const caderno = processos.map((elemento) => (
        elemento.caderno
    ));

    const conteudo = processos.map((elemento) => (
        elemento.conteudo
    ));
    
    var dataMencao = dataProcesso[0]
    var nomeCaderno = caderno[0]
    var textoPdf = conteudo[0]
    var dataRelatorio = dataProcesso[0]

    var nomeProfessor = usuarios.nome
    var emailProfessor = usuarios.email


    function gerarpdf(){
        var doc = new jsPDF()

        doc.text('Sindicato dos professores', 10, 15)
        doc.text(`Relatório do dia ${dataRelatorio}`, 120, 15)

		var strArr = doc.splitTextToSize(`No dia ${dataMencao} houve uma menção no caderno ${nomeCaderno} ao professor ${nomeProfessor}, que foi enviado para o e-mail de contato ${emailProfessor} pela equipe do sindicato atráves desse relatório, segue adiante o trecho encontrado de menção.`, 190)
        doc.text(strArr, 10, 30);

        var strArr = doc.splitTextToSize(textoPdf, 190)
        doc.text(strArr, 10, 60);

        doc.save('relatorio.pdf')
    }

    // Retornando valores na tela

    return (
        <>
            <ConteudoPrincipal>
                {listProcess}                    
            </ConteudoPrincipal>
        </>
    )
}

export default Conteudo;