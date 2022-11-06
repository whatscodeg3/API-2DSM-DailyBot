# 2ª Sprint
 Durante a apresentação da primeira sprint ao cliente, foi levantado que a automação do robô era interessante para a segunda sprint, por tanto um dos valores entregues foi a remoção do botão de ativação manual, e a implementação da ativação automática da busca, que ativa o robô as 20h da noite de acordo com o pedido do cliente. Também houve uma atualização no Crawler, que agora trás e exibe o texto do Pdf que menciona o associado, diferente da sprint passada que trazia o link da página do pdf, sendo que esse link virou um botão para caso ocorra algum bug na coleta automática do texto. E por fim, um sistema de descarte que automaticamente exclui os arquivos baixados que não são necessários mais.
 Também foi criado um botão de relatório, que gera e baixa um Pdf contendo algumas informações do associado, assim como do texto e conteúdo referente ao texto de menção, do qual está sendo gerado um relatório, servindo ao proposito de facilitar a comunicação para os associados, tendo apenas que baixar o relatório e enviar aos associados, valendo ressaltar que anteriormente os relatórios tinham que ser feitos manualmente, após terem o texto de menção do Diário Oficial em mãos. Por ultimo criamos a página de cadastro, para que não seja preciso mais cadastrar os dados dos associados pelo banco, tendo agora a opção via web.
 O MPV dessa sprint então foi a automatização do robô, a exibição do texto do Pdf ao invés do link, o descarte de arquivos desnecessários, a geração de relatório e a página de cadastro.

# DoR

- Mockup:
<img src="/doc/front-end/mockup-2-sprint.jpeg" alt="mockup completo" width="555" height="500" >
<img src="/doc/front-end/mockup-pg1-2-sprint.jpeg" alt="mockup 1 página" width="555" height="500" >
<img src="/doc/front-end/mockup-pg2-2-sprint.jpeg" alt="mockup 2 página" width="555" height="500" >

- Backlog da Sprint 2

| Prioridade | User Stories | Critério de Aceitação | Sprint | Status |
| :--------: | :----------: | :-------------------: | :----: | :----: |
| Alta🟥 | Eu como backoffice, quero ter a possibilidade de gerar relatórios dos processos salvos no histórico, a fim de deixar para o software fazer e não ser necessário realizar manualmente. | Tem como valor a automatização da geração de relatório. | 2 | ✅ |
| Alta🟥 | Eu como backoffice, quero a automatização do robô, para que seja preciso apenas entrar no site e ver as novas menções. | Tem como valor a automatização do processo, assim como uma melhor experiência de uso. | 2 | ✅ |
| Alta🟥 | Eu como backoffice quero que após a extração do conteúdo, haja o descarte do PDF a fim de não sobrecarregar o sistema. | Tem como valor o uso mais eficiente do espaço no banco de dados. | 2 | ✅ |
| Alta🟥 | Eu como backoffice desejo ter total controle dos associados, que iram começar e deixar de fazer parte do sistema, a fim de garantir não precisar repetir o cadastro toda vez. | Tem como valor a facilidade, podendo cadastrar apenas uma vez, além da facilidade em remover. | 2 | ✅ |
| Media🟨 | Eu como backoffice quero que as informações pegas pelo Crawler, relacionadas aos associados, sejam exibidas num histórico individual. | Tem como valor o acesso mais fácil as informações armazenadas no banco. | 2 | ✅ |
| Media 🟨 | Eu como cliente, quero um manual de instalação do projeto assim como de utilização do software. | Tem como valor, qualquer pessoa poder instalar e usar o software, mesmo vendo pela primeira vez. | Atualização continua | ✅ |

- Tarefas geradas pelas User Stories ([Link da Pasta](https://github.com/whatscodeg3/API-2DSM-DailyBot/blob/main/doc/sprints/sprint%202/Tarefas))

- MEC (Modelo Entidade Conceitual):

<img src="/doc/front-end/MEC-2-SPRINT.png" alt="Modelo Entidade Conceitual" width="855" >

- MER (Modelo Entidade Relacional):

<img src="/doc/front-end/MER-2-SPRINT.png" alt="Modelo Entidade Relacional" width="555" height="500" >

- Burndown da 2 sprint:

<img src="/doc/front-end/burndown-2sp.jpeg" alt="Burndown 2 sprint" width="655" height="500" >

- Arquitetura simplificada de software:

<img src="/doc/front-end/ARQUITETURA-2-SPRINT.png" alt="Logica do software na 2 sprint" width="555" height="500" >





