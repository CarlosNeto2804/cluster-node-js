# Cluster Com NodeJS

Um cluster, em poucas palavras, é basicamente um conjunto de recursos computacionais separados atuando de forma conjunta, agindo como se fossem um único recurso, geralmente com o objetivo de aumentar o poder de processamento de uma aplicação.

Quando os servidores de uma aplicação já estão escalados horizontalmente, com algum tipo de gerenciador de carga (load balancer) atuando para balanceá-los, basicamente já temos um cluster. Porém, quando falamos sobre a utilização do Node.js em modo cluster, na verdade falamos sobre dividir o processo principal da aplicação, criando um ou mais processos filhos (denominados workers) dentro do mesmo host e que responderão às requisições simultaneamente.

O Node.js é um sistema single-threaded. Em outras palavras, dentro do processo principal do Node.js existe apenas uma única linha de execução que parte do ponto de entrada da aplicação até o seu encerramento. Apesar desta característica, o Node.js executa tarefas assíncronas de maneira extremamente eficiente graças ao Node.js Event Loop.

## Configuração

```bash
#instalar dependencias via npm
$ npm install
```
```bash
#instalar dependencias via yarn
$ yarn install
```

## Execução 

```bash
# executar normalmente
$ npm start
```
```bash
# executar em cluster
$ npm run cluster
```

## Teste de extress 
 Com a aplicação rodando execute
```bash
$ npm run arttest
```