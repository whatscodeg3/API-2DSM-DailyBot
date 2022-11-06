# 1ª Sprint
Após planejamento e analise dos requisitos passados pelo cliente, a dor que deveriamos resolver assim como o escopo do projeto, chegados a uma conclusão validada que consisti no funcionamento do Crawler simplificado, onde sua ativação seria manual, indo até o Diário Oficial e coletando o link da pagina do PDF, do qual o associado que foi procurado é mencionado, logo após esse link é salvo no banco de dados e então exibido no historico do associado, junto com a data do dia.
Dessa forma, entregamos como MVP uma versão simplificada da final do Crawler, que automatiza a parte mais trabalhosa do processo, que seria a busca das menções de um numero indefinido de professores em mais de 3 cardernos (Cidade, Executivo 1 e 2), um trabalho que foi cortado pela metade faltando apenas abrir o link, copiar a menção e gerar o relatorio para enviar ao associado, gerando assim um ganho de tempo e efetividade, além de resolver a dor principal do cliente.

# DoR

- Wireframe:
<img src="/doc/front-end/Wireframe1.jpeg" alt="wireframe sprint 1" width="855" >
<img src="/doc/front-end/Wireframe2.jpeg" alt="wireframe sprint 1" width="855" >

- Mockup:
<img src="/doc/front-end/mockup.jpeg" alt="mockup completo" width="855" >
<img src="/doc/front-end/mockup-pg1.jpeg" alt="mockup 1 página" width="855" >
<img src="/doc/front-end/mockup-pg2.jpeg" alt="mockup 2 página" width="855" >

- Backlog da Sprint 1

| Tarefa | Prioridade | User Stories | Critério de Aceitação | Sprint | Status |
| :----: | :--------: | :----------: | :-------------------: | :----: | :----: |
| Alta🟥 | Eu como backoffice, quero que haja uma busca dos conteúdos relacionados aos associados, baixando posteriormente para tratamento de dados pegando pontos de interesse. | Tem como valor a automatização do processo de busca. | 1 | ✅ |
| Alta🟥 | Eu como backoffice, quero que o sistema encontre por si só, os conteúdos relacionados ao associado no PDF do diário baixado, usando como referencia o banco de dados, para facilitar o processo e diminuir o trabalho. | Tem como valor a automatização e ganho de tempo, coletando trecho especifico do Pdf para ser usado. | 1 | ✅ |
| Alta🟥 | Eu como backoffice, quero que os conteúdos relacionados aos associados, sejam armazenados para que possam ser consultados posteriormente. | Tem como valor a possibilidade do uso dessas informações salvas, para o sistema. | 1  | ✅ |
| Alta🟥 | Eu como backoffice quero um banco de dados, a fim de salvar e ter acesso a informações que forem necessárias. | Tem como valor um lugar para guardar dados, que possam ser usados caso necessarios. | 1 | ✅ |
| Media🟨 | Eu como backoffice, quero ter interfaces web que facilitam o uso do sistema, para que seja preciso apenas acessar o site e ter uso completo das funções. | Tem como valor uma melhor experiência para quem for usar o sistema. | 1 | ✅ |
| Media 🟨 | Eu como cliente, quero um manual de instalação do projeto assim como de utilização do software. | Tem como valor, qualquer pessoa poder instalar e usar o software, mesmo vendo pela primeira vez. | Atualização continua | ✅ |

- Tarefas geradas pelas User Stories ([Link da Pasta]())

- MEC:

<img src="/doc/front-end/MEC.jpg" alt="Modelo Entidade Conceitual" width="855" >

- MER:

<img src="/doc/front-end/MER.png" alt="Modelo Entidade Relacional" width="555" >

- Diagrama de classe:

<img src="/doc/front-end/diagrama de classe.jpeg" alt="Diagrama de classe" width="855" >

- Burndown da 1 sprint:

<img src="/doc/front-end/burndown-1sp.jpeg" alt="Burndown 1 sprint" width="855" >

- Lógica de software:

<img src="/doc/front-end/logica do software.png" alt="Logica do software na 1 sprint" width="855" >









