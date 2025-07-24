// Carrega o módulo express na memória
const express = require("express");
const fs = require("fs");
const path = require("path");

// Criar a instância do express
const app = express();

// Configurar a porta do servidor
const port = 3000;

// Middleware para parsear JSON no corpo das requisições
app.use(express.json());

// Adicionar o cors para permitir requisições de outros domínios
const cors = require("cors");
app.use(cors());

// Caminho do arquivo HTML que será manipulado
const htmlFilePath = path.join(__dirname, "file.html");

// Rota POST para atualizar o arquivo HTML com os dados do JSON
app.post("/api/update-html", (req, res) => {
  //Inicializar as variáveis title e content
  //Com os valores que eu recebi do corpo da requisição
  const { title, content } = req.body;
  // Retornar um erro se a requisição estiver
  // mal-formulada
  if (!title || !content) {
    return res
      .status(400)
      .json({ error: "Os campos 'title' e 'content' são obrigatórios." });
  }
  //Criar uma variável com os dados recebidos
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
    </head>
    <body>
      <h1>${title}</h1>
      <p>${content}</p>
    </body>
    </html>
  `;
  //Escrever htmlcontent no arquivo htmlFilePath
  fs.writeFile(htmlFilePath, htmlContent, (err) => {
    //Se der erro, retornar com o código 500
    if (err) {
      console.error("Erro ao escrever no arquivo HTML:", err);
      return res
        .status(500)
        .json({ error: "Erro ao atualizar o arquivo HTML." });
    }
    //Se não der erro, retornar com o código 200
    res.json({ message: "Arquivo HTML atualizado com sucesso!" });
  });
});

// Rota GET para obter o conteúdo do arquivo HTML
app.get("/api/get-html", (req, res) => {
  // Ler o arquivo contido em htmlFilePath
  fs.readFile(htmlFilePath, "utf-8", (err, data) => {
    //Se der erro ao ler o arquivo, retornar um erro 500
    if (err) {
      console.error("Erro ao ler o arquivo HTML:", err);
      return res.status(500).json({ error: "Erro ao ler o arquivo HTML." });
    }
    // Se não der erro retornar ao cliente o conteúdo
    res.send(data);
  });
});

// Colocar nossa instância para rodar
app.listen(port, () => {
  console.log(`Servidor de API está rodando na porta ${port}`);
});
