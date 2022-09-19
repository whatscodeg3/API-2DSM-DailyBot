# API-2DSM-DailyBot
<p align="center">
      <img src="/doc/front-end/logo-whatscode.svg" alt="logo da equipe" width="200">
      <h3 align="center"> WhatsCode | Equipe 3</h3>

<hr>

<br>

<p align="center">
  <a href ="#api"> Aprendizagem por Projetos Integrados </a> |
  <a href ="#desafio"> Desafio </a>  |   
  <a href ="#escopo"> Escopo do Projeto </a>  |  
  <a href ="#backlog"> Backlog das Sprints </a>  | 
  <a href ="#manual"> Manual de Instalação e Utilização  |
  <a href ="#sprint"> Sprints </a>  | 
  <a href ="#equipe"> Equipe </a>  |
</p>

<br>

<h4 align="center">
 <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"><img src = "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/></a>
 <a href="https://www.typescriptlang.org/"><img src = "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"/></a>
 <a href="https://nodejs.org/en/"><img src = "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"/></a>
 <a href="https://www.w3schools.com/tags/tag_doctype.asp"><img src = "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"/></a>
 <a href="https://www.w3schools.com/css/"><img src = "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"/></a>
</h4>

<br>
<br>

> Status do Projeto: Em andamento 🚧

<br>

## Aprendizagem por Projetos Integrados <a id="api"></a>

  A API (Aprendizagem por Projetos Integrados), desenvolvida no escopo do CADI, é a metodologia de ensino em implantação na Fatec São José dos Campos, desde o Segundo Semestre de 2019, do qual os alunos formam equipes baseadas na metodologia scrum, tendo um aluno como master, Product Owner e os integrates restantes dev team. O time é desafiado por um cliente real (nesse projeto nosso cliente é a MidAll: Tecnologias), a desenvolver uma solução para um problema, tendo que atender requisitos exigidos de tecnologia. <br> 
  
  O API segue tendo como pilares os seguintes valores: <br>
 - Real Problem Based Learning (rPBL) <br>
 - Validação Externa <br>
 - Mindset Ágil (Agile) <br>

<br>

## :pencil2: Desafio <a id="desafio"></a>

Um sindicato de professores quer automatizar um processo de negócio muito importante para seu Core , para reduzir custos e melhorar a entrega de valor para seus associados. <br>

Atualmente existe uma equipe com cerca de 10 pessoas fazendo o Backoffice deste processo, que consiste em uma leitura diária do Diário Oficial do Estado de SP, para localizar publicações de processos trabalhistas(férias, aposentadoria, questões administrativas, etc.), que façam menção aos seus associados. Este arquivo atualmente é disponibilizado em pdf de forma eletrônica no portal do DO.online - http://www.imprensaoficial.com.br/DO/HomeDO_2_0.aspx# <br>
Ao localizar o conteúdo, o backoffice faz registro do mesmo em uma planilha de Excel, gera um e-mail com este conteúdo ao Professor Associado, e acompanha os prazos de conclusão caso seja necessário.

Proposta: Desenvolver Crawler que consiga buscar, ler o arquivo e identificar o conteúdo relacionado aos Professores Associados, realizar os cruzamentos necessários com as bases de dados de associados, que suportarão está solução, gravar todos os processos publicados relacionados aos associados, e emitir relatório diário para que a equipe consiga disparar os e-mails para os professores citados no Diário Oficial. Caso consigam também realizar a automação do disparo destes e-mails seria uma sofisticação para a solução.

<br>

## :dart: Escopo do Projeto <a id="escopo"></a>

 > *Requisitos Funcionais*

· Baixar Diário Oficial em pdf e realizar a gestão do armazenamento e descarte dos arquivos.

· Ler o arquivo, localizar o conteúdo referente ao associado e armazenar em um banco de dados para posterior desdobramento do backoffice.

· Interface para cadastro de associados contendo dados pessoais e de contato.

· Relatório(impresso ou arquivo) diário sobre os associados citados no Diário Oficial contendo(nome, email e conteúdo publicado e respectivo prazo caso seja necessário).

 > *Requisitos Não Funcionais*

· Linguagem Node.js (Requisito Exigido Fatec)

· TypeScript e Javascript (Requisito Exigido Fatec)

· Banco de Dados Relacional (Requisito Exigido Fatec)

· Documentações do Projeto

> *Tecnologias Desejáveis*

· SGBD MySQL, PostgreSQL ou Oracle (Requisito Sugerido Fatec)

· Docker

<br>

## :dart: Backlog Total e Historias de Usuário <a id="backlog"></a>

| Tarefa                                        | Prioridade                                                                                                                                                                                                                                      | User Stories     | Critério de Aceitação | Sprint | Status |
| :-------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------: | :--------: | :----: | :----: |
| Busca e Download | Alta🟥 | Eu como backoffice, quero que haja uma busca dos conteúdos relacionados aos associados, baixando posteriormente para tratamento de dados pegando pontos de interesse. | Tem como valor a automatização do processo de busca. | 1 | ✅ |
| Leitura e Cruzamento de Dados| Alta🟥 | Eu como backoffice, quero que o sistema encontre por si só, os conteúdos relacionados ao associado no PDF do diário baixado, usando como referencia o banco de dados, para facilitar o processo e diminuir o trabalho. | Tem como valor a automatização e ganho de tempo, coletando trecho especifico do Pdf para ser usado. | 1 | ✅ |
| Armazenamento dos Conteúdo Retirado do PDF | Alta🟥 | Eu como backoffice, quero que os conteúdos relacionados aos associados, sejam armazenados para que possam ser consultados posteriormente. | Tem como valor a possibilidade do uso dessas informações salvas, para o sistema. | 1  | ✅ |
| Geração de Relatório | Alta🟥 | Eu como backoffice, quero ter a possibilidade de gerar relatórios dos processos salvos no histórico, a fim de deixar para o software fazer e não ser necessário realizar manualmente. | Tem como valor a automatização da geração de relatório. | 2 | 🔄 |
| Banco de Dados | Alta🟥 | Eu como backoffice quero um banco de dados, a fim de salvar e ter acesso a informações que forem necessárias. | Tem como valor um lugar para guardar dados, que possam ser usados caso necessarios. | 1 | ✅ |
| Pagina de Cadastro e Remoção de Associados | Alta🟥 | Eu como backoffice desejo ter total controle dos associados, que iram começar e deixar de fazer parte do sistema, a fim de garantir não precisar repetir o cadastro toda vez. | Tem como valor a facilidade, podendo cadastrar apenas uma vez, além da fácilidade em remover. | 2 | 🔄 |
| Histórico de Associados | Alta🟥 | Eu como backoffice quero que as informações pegas pelo Crawler, relacionadas aos associados, sejam exibidas num historico individual. | Tem como valor o acesso mais fácil as informações armazenadas no banco. | 1 | ✅ |
| Automação do Robo para Busca Diaria | Alta🟥 | Eu como backoffice, quero a automatização do robô, para que seja preciso apenas entrar no site e ver as novas menções. | Tem como valor a automatização do processo, assim como uma melhor experiência de uso. | 3 | 🔄 |
| Descarte dos Arquivos Coleta de Conteúdo | Media🟨 | Eu como backoffice quero que após a extração do conteúdo, haja o descarte do PDF a fim de não sobrecarregar o sistema. | tem como valor o uso mais eficiente do espaço no banco de dados. | 2 | 🔄 |
| Manual de Instalação e Utilização | Media🟨 | Eu como cliente, quero um manual de instalação do projeto assim como de utilização do software. | Tem como valor, qualquer pessoa poder instalar e usar o software, mesmo vendo pela primeira vez. | Atualização continua | ✅ |
| Barra de Pesquisa | Baixo🟩 | Eu como backoffice, quero uma área de busca de maneira a achar mais fácil, um associado especifico em meio a lista. | Tem como valor uma melhor experiência para o usuario. | 2 | 🔄 |
| Login | Baixo🟩 | Eu como cliente, quero um sistema de login para maior segurança, além de posteriormente transformar o software de uso interno, para externo. | Tem como valor a segurança de informações sensiveis, além de facilitar o trabalho posterior ao projeto. | 3 | 🔄 |
| Paginas Web (front-end) | Media🟨 | Eu como backoffice, quero ter interfaces web que facilitam o uso do sistema, para que seja preciso apenas acessar o site e ter uso completo das funções. | Tem como valor uma melhor experiência para quem for usar o sistema. | 2 | 🔄 |


## Manual de Instalação e Utilização <a id="manual"></a>

### Banco de Dados:

1. Execute o MySQL Workbench e selecione a conexão padrão 'Local instance MySQL80' ou crie uma nova.

2. Execute o Script SQL abaixo:

```
create database apimidall;

use apimidall;

CREATE TABLE IF NOT EXISTS `associados` (`id` INTEGER UNSIGNED auto_increment , `nome` VARCHAR(255) NOT NULL, `sobrenome` VARCHAR(255) NOT NULL, `cpf` VARCHAR(255) NOT NULL UNIQUE, `email` VARCHAR(255) NOT NULL UNIQUE, `dataNascimento` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `processos` (`id` INTEGER UNSIGNED auto_increment , `conteudo` VARCHAR(2000) NOT NULL, `associadoId` INTEGER UNSIGNED, PRIMARY KEY (`id`), FOREIGN KEY (`associadoId`) REFERENCES `associados` (`id`) ON DELETE SET NULL ON UPDATE CASCADE) ENGINE=InnoDB;

INSERT INTO `apimidall`.`associados` (`nome`, `sobrenome`, `cpf`, `email`, `dataNascimento`) VALUES ('HELENO HELYNE DE SOUZA JUNIOR', 'exemplo', '1234567892', 'heleno@teste.com', '2022-09-17');

INSERT INTO `apimidall`.`associados` (`nome`, `sobrenome`, `cpf`, `email`, `dataNascimento`) VALUES ('MARIA ISABEL CORREA DE ALMEIDA RUY', 'exemplo', '1234567893', 'maria@teste.com', '2022-09-17');

INSERT INTO `apimidall`.`associados` (`nome`, `sobrenome`, `cpf`, `email`, `dataNascimento`) VALUES ('FERNANDA CRISTINA GOMES GARCIA DE MELO', 'exemplo', '1234567894', 'fernanda@teste.com', '2022-09-17');

```

3. Crie um .env na pasta backend

4. Cole o código abaixo e preenche os campos de “” vazios:

```
DB_HOST="" #hostname da conexão criada
DB_USER="" #username do usuário do banco
DB_PASS="" #senha do seu Workbench
DB_NAME="apimidall"
DB_PORT="" #porta da conexão criada
```

<img src="/doc/front-end/banco-exemplo.png" alt="demonstração de onde fica os campos" width="555" >

### Rodar a Aplicação:

1. Clone o repositorio na sua IDE de preferencia (a equipe usou Visual Studio Code)

2. Execute no terminal (cmd) os seguintes comandos um por um:

cd frontend -> npm install -> npm start

3. Abra outra aba do terminal e execute os comandos um por um:

cd backend -> npm install -> npm start

4. Após ambos os npm start terem startado, entre no site http://localhost:3000/ 

### Como usar o sistema.

1. Para cadastrar professores e suas informações, preencha os campos vazios a seguir usando os exemplos já no script para se orientar, após preenchido adicionei no mysql e rode a linha para inserir no banco.

```
INSERT INTO `apimidall`.`associados` (`nome`, `sobrenome`, `cpf`, `email`, `dataNascimento`) VALUES ('', '', '', '', '');
```
2. Agora para ativar o robô, basta clicar no botão e esperar até o site recarregar.

3. Assim que o robo terminar, basta descer a pagina para encontrar a lista de professores, clicar no nome e com isso abrir o historico com o link dos PDFs salvos no banco, incluindo do dia atual que estará em primeiro caso haja.

4. Por fim ao clicar no link, a página do PDF onde houve a menção será aberta.

<br>

## :date: Sprints <a id="sprint"></a>

🔖 SPRINT 1 ([Link da Pasta](https://github.com/whatscodeg3/API-2DSM-DailyBot/tree/main/doc/sprints/Sprint%201)):  Concluído ✅

🔖 SPRINT 2 ([Link da Pasta](https://github.com/whatscodeg3/API-2DSM-DailyBot)):  Aguardando 🚧

🔖 SPRINT 3 ([Link da Pasta](https://github.com/whatscodeg3/API-2DSM-DailyBot)):  Aguardando 🚧

🔖 SPRINT 4 ([Link da Pasta](https://github.com/whatscodeg3/API-2DSM-DailyBot)):  Aguardando 🚧


<br>

## :mortar_board: Equipe <a id="equipe"></a>

| Membro                | Função        | Github                                                                                                                                                | Linkedin                                                                                                                                                                                         |
| :-------------------: | :-----------: | :---------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | 
| Kevin Ribeiro         | Scrum Master  | <a href="https://github.com/KevinRomRib"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"></a>   | <a href="https://www.linkedin.com/in/kevinrribeiro/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white">                                  |
| Jonatas Dallo         | Product Owner | <a href="https://github.com/Jonatas-Dallo"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"></a> | <a href="https://www.linkedin.com/in/jonatas-dall%C3%B3-147638206"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a>                |
| Thiago Oliveira       | Desenvolvedor | <a href="https://github.com/ThiagoOAL"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"></a>     | <a href="https://www.linkedin.com/in/thiagoleite042"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a>                              |
| Lucas Medici          | Desenvolvedor | <a href="https://github.com/LucasMedici"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"></a>   | <a href="https://www.linkedin.com/in/lucas-medici-a15971237"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a>                      |
| Matheus Augusto       | Desenvolvedor | <a href="https://github.com/MatheusAJesus"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"></a> | <a href="https://www.linkedin.com/in/matheus-augusto-de-jesus-albernaz-918536216"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a> |
| Pedro Corrá           | Desenvolvedor | <a href="https://github.com/PHCorra"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"></a>       | <a href="https://www.linkedin.com/in/pedro-c-95b57212a/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a>                          |
| Naiara Leonor           | Desenvolvedor | <a href="https://github.com/nai-leonor"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"></a>       | <a href="https://www.linkedin.com/in/naiara-leonor/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a>                          |
| André Costa           | Desenvolvedor | <a href="https://github.com/fecosta290"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"></a>       | <a href="https://www.linkedin.com/in/andré-felipe-353260243/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a>                          |
