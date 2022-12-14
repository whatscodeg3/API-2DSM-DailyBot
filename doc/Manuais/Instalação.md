### Manual de instalação

Etapa 1:
- Ter instalado Node.js na maquina
- Ter instalado Python na maquina

Etapa 2:
- Crie uma nova conexão no mysql workbench
- Execute o seguinte script:

```
create database apimidall;

use apimidall;
```

<img src="/doc/front-end/manual/mysql-script.png" width="555" height="500">

Etapa 3:
- Clone o projeto no Visual Studio Code 
- Crie um arquivo na pasta "backend" chamado ".env"

<img src="/doc/front-end/manual/.env1.png" width="455" height="400">

- Cole o seguinte texto e preencha com as informações do seu banco:

```
DB_HOST="" #hostname da conexão criada
DB_USER="" #username do usuário do banco
DB_PASS="" #senha do seu Workbench
DB_NAME="apimidall"
DB_PORT="" #porta da conexão criada
```
<img src="/doc/front-end/manual/.env2.png" width="655" height="300">
<img src="/doc/front-end/manual/banco-exemplo.png" width="455" height="400">

- Após preenchido abra a pasta "backend", depois "src", depois "robo_leitor_pdf" e abra o arquivo "leitor.pdf

<img src="/doc/front-end/manual/leitor.py1.png" width="405" height="650">

- Preencha os campos apontados na imagem abaixo, com as informações do seu banco:

<img src="/doc/front-end/manual/leitor.py2.png" width="755" height="400">

Etapa 4:

- Abra um terminal e vá até a pasta "backend" usando o comando "cd"
- Ao chegar na pasta, use o comando "npm install"

<img src="/doc/front-end/manual/backend-install.png" width="855">

- Após baixado, use o comando "pip install -r requirements.txt"

<img src="/doc/front-end/manual/backend-pip-install.png" width="655" height="400">

- Terminando de baixar as dependencias do projeto, de o comando "npm start" para rodar o backend

<img src="/doc/front-end/manual/back-npm-start.png" width="855">

Etapa 5:

- Após a etapa anterior que criará as tabelas, execute o script abaixo:

```
INSERT INTO associados(nome, senha, cpf, email, dataNascimento)
 VALUES ('adm', 'adm123', '12345', 'adm@gmail.com', '2000-09-17');

```

Obs: o E-mail e senha do Login será definidos, pelo INTO no script acima substituindo o "adm@gmail.com" e "12345", pelos que escolher.

Etapa 6:

- Abra um segundo terminal e vá até a pasta frontend da mesma forma que feito anteriormente.
- Chegando nela, use o comando "npm install"

<img src="/doc/front-end/manual/front-npm-install.png" width="855">

- Assim que terminar, use o comando "npm run dev" para rodar o frontend

<img src="/doc/front-end/manual/front-npm-run-dev.png" width="855">

Etapa 7:

- Abra um terceiro terminal e vá até a pasta "robo_leitor_pdf" 
- Após chegar na pasta pelo terminal, use o comando "py gatilho.py"

<img src="/doc/front-end/manual/gatilho.png" width="855">

Etapa 8:

- Por ultimo, abra um quarto terminal e vá até a pasta "backend"
- Use o comando "npm run bot"

<img src="/doc/front-end/manual/run bot.png" width="855" >

Observação:

- Caso queira inserir alguns professores para teste, segue um script de inserção:

```
INSERT INTO `apimidall`.`associados` (`nome`, `cpf`, `email`, `senha`, `dataNascimento`) VALUES ('HELENO HELYNE DE SOUZA JUNIOR', '1234567892', 'heleno@gmail.com', '1', '2022-09-17');

INSERT INTO `apimidall`.`associados` (`nome`, `cpf`, `email`, `senha`, `dataNascimento`) VALUES ('MARIA ISABEL CORREA DE ALMEIDA RUY', '0987654321', 'maria@gmail.com', '2', '2016-05-24');

INSERT INTO `apimidall`.`associados` (`nome`, `cpf`, `email`, `senha`, `dataNascimento`) VALUES ('FERNANDA CRISTINA GOMES GARCIA DE MELO', '1230984576', 'fernanda@gmail.com', '3', '1974-11-02');
```

Obs: O e-mail do associado deve ser válido ou nada será enviado, caso queira, insira um associado teste com um e-mail que tenha acesso, para poder entrar nele e testar o sistema de envio de e-mail automatico, vendo o que será recebido associado.





















































