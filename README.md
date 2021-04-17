# Chaos Engineering API

### Clonagem do repositório

`git clone https://github.com/momanhaes/chaos-api`

### Instalação das dependências

`npm install`

### INICIALIZAÇÃO DA API

### Verifique se o docker está instalado no seu computador

`docker`

### Baixe o container do mongo

`docker pull mongo`

### Suba um container com a instalação do mongo

## Parâmetros: nome, redirecionamento de porta e imagem

`docker run --name mongodb -p 27017:27017 -d mongo`

## Obs: Deve retornar um código após execução do comando acima.

### Verifique quais imagens estão rodando

`docker ps`

### Verificar quais imagens estão disponíveis

`docker ps -a`

### Rode a imagem do mongo

`docker start mongo`

### Vá até ao navegador e digite o caminho abaixo

`localhost:27017`