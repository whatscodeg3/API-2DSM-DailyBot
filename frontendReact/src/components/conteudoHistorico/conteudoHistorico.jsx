import React from 'react'

import { ConteudoPrincipal, Details, Summary, DivInput, InputButton, Trecho, Linha, ConteudoDatails } from './styles'

function Conteudo() {

    let dataMencao = '25/04/2021'
    let nomeCaderno = 'executivo 1'
    let nomeProfessor = 'Daniel Machado de Carvalho'
    let emailProfessor = 'danielmachado@gmail.com'

    let textoPdf = '8529183/1 EDSON MASANORI TAKEDA NIVEL III 4 ANSM14 18/07/2022'
    let dataRelatorio = '27/09/2022'

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

    return (
        <>
            <ConteudoPrincipal>
                    <Details>
                        <Summary>
                            <p>xx/xx/xxxx</p>
                            <DivInput>
                                <InputButton type="button" value="Relatório" onClick={gerarpdf} />
                                <InputButton type="button" value="Link" />
                            </DivInput>
                        </Summary>
                        <ConteudoDatails>
                            <Linha />
                            <Trecho>Considerando o Ato da Segunda Subdefensora Pública-Geral do Estado, de 12-09-2022, publicado no DO de 13-09-2022, que regulamentou a participação de Defensoras e Defensores Públicos no evento "Cidadania em Movimento - CEU São
                            Rafael", a se realizar no dia 17-09-2022, na Rua Cinira Polônio,
                            100, Itaquaquecetuba/SP</Trecho>
                        </ConteudoDatails>
                    </Details>
                    
            </ConteudoPrincipal>
        </>
    )
}

export default Conteudo;