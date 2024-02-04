### Dependências

Certifique-se de ter o Node.js instalado em sua máquina. Você pode baixar e instalar a versão 21.6.1 do Node.js em [nodejs.org](https://nodejs.org/).

Agora, vamos prosseguir com o restante das instruções.

### Banco de Dados

1. Certifique-se de ter um banco de dados PostgreSQL na sua máquina

2. Abra o arquivo `db_create.sql` no script do seu banco e rode.

2. Verifique se o database Projeto-gestao-clientes foi criado e a tabela clientes foi gerada dentro desse database.

3. Pronto, agora é só seguir com os passos do backend e frontend

### Backend

1. Abra o terminal e navegue até o diretório do projeto clonado `projeto-gestao-clientes`.

2. Vá para a pasta do backend usando o seguinte comando:

   ```bash
   cd projeto-gestao-clientes-server

3. Instale as dependências do backend executando o comando:

   ```bash
   npm install

4. Dentro da pasta utils no arquivo database.ts, configure as credenciais do seu banco, colocando a sua senha, o resto foi configurado da forma que vem por padrão do banco, mas certifique-se de configurar de acordo com o seu banco
   
5. Após a instalação das dependências, inicie o servidor backend com o comando:

   ```bash
   npm run dev

6. O servidor estará em execução na porta 8081.

7. Agora você pode acessar as APIs fornecidas pelo backend para interagir com o sistema de gestão de clientes.

8. Certifique-se de que o backend esteja configurado corretamente e em execução para interagir com o frontend.


### Frontend

1. Após ter instalado o Node.js, navegue até o diretório `projeto-gestao-clientes-web` no terminal.

2. Execute o seguinte comando para instalar as dependências do projeto:

   ```bash
   npm install

5. Após a instalação das dependências, inicie o servidor backend com o comando:

   ```bash
   npm run dev

6. O servidor estará em execução em http://localhost:5173/.

## Agora você pode acessar a aplicação gestão de clientes.

