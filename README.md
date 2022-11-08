# A Canção de Vecna 

## 📺 Introdução

Este projeto foi idealizado com o objetivo de concluir o trabalho de faculdade da materia de Estrutura de Dados de uma maneira 
um pouco diferente. 

Basicamente cada aluno recebeu um arquivo (.txt). Esses arquivos continham partituras de musicas em um formato chamado ABC. Elas, além de estarem embaralhadas,
tambem estavam misturadas com outras 13 musicas aleatorias. O .txt foi organizado em um JSON com três keys.
```
[{
    arq: inteiro,
    ordem: inteiro,
    notas: string
}, ...

Exemplo: {"arq":49,"ordem":15083,"notas":"G,,,2 z6| \\"}
```
O desafio era separar e ordenar as notas seguindo a ordem e encontrar qual desses arquivos, depois de convertidos para musica novamente,
era a musica correta(não aleatória) para "fugir do Vecna" - Tematizando Stranger Things( Serie de TV Americana).

O desafio completo está em um PDF (desafio.pdf) nesse mesmo projeto

## 🛠 Construído com

* [Javascript](https://www.javascript.com/) - A linguagem 
* [React Native](https://reactnative.dev/) - O framework 
* [NPM](https://www.npmjs.com/) - Gerenciador de Pacotes
* [Node](https://nodejs.org/en/) - RunTime
* [Expo](https://expo.dev) - Ferramenta facilitadora no desenvolvimento de apps

### 🔧 Pré-requisitos

```
Node - versão LTS - ano 2022
NPM  - 8.19.2 ou superior
Expo - versão 6.0.5 ou superior
```

## 📌 Começando

Clone o projeto para a sua maquina e dentro da pasta execute os seguintes comandos
```
npm install // baixa as dependencias do projeto
expo start // starta a aplicação e a mantem rodando
```
O aplicativo pode ser vizualidado em um dispositivo conectado a maquina ou em um emulador virtual (duvidas ler a doc do expo)

## 📜 Arquivos

### Esse projeto possui no caminho songOfVecna\src\assets\files arquivos uteis para a utilização

* desafio.pdf     - Descrição completa do trabalho;
* meuarquivo.txt  - Arquivo que armazena as musicas embaralhadas
* more/           - Pasta com outros arquivos de outros alunos para fins de testes  

## ⚙
## 📚 
## ✒ 
