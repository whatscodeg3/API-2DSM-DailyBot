### Manual de utilização

Questões do sistema:

- Enquanto as aplicaçôes estiverem rodando (os 4 terminais), o site continuara funcionando sem problemas.
- O robô vai automaticamente fazer a procura as 20h, para mudar esse horario basta entrar no arquivo da seta vermelha na imagem abaixo, e ir no lugar da seta verde colocando em cima as horas e em baixo os minutos.
Obs: Caso queira que a busca seja feita assim que rodar a aplicação, basta descomentar o codigo na seta vermelha e deixar todo o codigo abaixo comentado, antes de rodar os terminais.

<img src="/doc/front-end/manual/utilização-agendamento.png" alt="wireframe sprint 1" width="855">

- Para definir o e-mail que será usado, no arquivo leitor.py coloque no lugar do "exampleEmail@outlook.com" indicado pela seta verde, o e-mail de preferencia e a senha desse e-mail no "examplePassword" indicado pela seta vermelha.
Obs: Só funciona com outlook, o gmail na data de 30 de maio de 2022, não autorizará mais o uso de apps ou dispositivos de terceiros que exigem apenas nome de usuário e senha para fazer login na Conta do Google, mas caso volte a autorizar posteriormente então poderá ser usado conta gmail também.

<img src="/doc/front-end/email.png" alt="email.png" width="855">

Usando o site:

- Para cadastrar professores no banco, basta entrar na página de cadastro e preencher os campos além de dar a autorização, então ao preencher o botão "cadastrar" os dados serão salvos no banco.
Obs: Tome cuidado especial na hora de cadastrar o nome do associado, pois deve condizer com o usado no Diário Oficial.
- Da mesma forma caso quera remover um professor, entre na página remoção e clique no botão "excluir" do associado que deseja remover, confirmando o processo ao clicar no "excluir".
- Na página inicial, há uma lista dos professores cadastrados no banco, clicando em um deles irá para o histórico daquele professor.
- No historico estão as informações do professor com algumas escondidas no "ver mais", os textos de menção salvo no banco daquele associado(clique no que quer ver para exibir o conteúdo), assim como a data que foi pego e o link da página do Pdf, para caso tenha ocorrido algum bug na coleta automatica.
- Clicando no botão relatório, será gerado e baixado um Pdf contendo algumas informações do associado, o dia que aquele relatório foi gerado, o texto de menção do qual está sendo gerado o relatório, o dia da menção e em que caderno do Diário Oficial.
