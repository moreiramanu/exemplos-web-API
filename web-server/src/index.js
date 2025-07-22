//Carrrega o módulo express na memória
const express = require("express");
//Criar a instância do express
const app = express();
//Configurar a porta do servidor
const port = 3000;
//Configurar o servidor para servir arquivos HTML
//dentro da pasta public
app.use(express.static("../public"));
//Colocar nossa instância para rodar
//Listen é uma função com dois argumentos
// O primeiro é a porta que o servidor vai escutar
// O segundo é uma função anônima que será executada
app.listen(port, () => {
  console.log(`Exemplo está rodando na porta ${port}`);
});
