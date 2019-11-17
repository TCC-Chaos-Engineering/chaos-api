const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

//Iniciando o BD
mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useNewUrlParser: true
});

requireDir("./src/models/");

// Rotas
app.use("/api", require("./src/routes"));

app.listen(3000);

// TUTORIAL PARA SUBIR O SERVIDOR

//Verificar se o docker está instalado
// docker

// Baixar o container do mongo
// docker pull mongo

// Subir um container com a instalação do mongo
// Parâmetros: nome, redirecionamento de porta, imagem
// docker run --name mongodb -p 27017:27017 -d mongo
// Obs: Deve retornar um código.

// Verificar quais imagens estão rodando
// docker ps

// Verificar quais imagens estão disponíveis
// docker ps -a

// Rodar a imagem do mongo
// docker start mongo

// Ir até ao navegador
// localhost:27017
