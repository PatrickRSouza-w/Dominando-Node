import { readFile } from 'node:fs/promises'; // importa a função readFile do módulo fs do Node.js

readFile('hello.txt')
    .then(content => console.log(`File content: ${content}`)) // lê o conteúdo do arquivo hello.txt de forma assíncrona e imprime no console
    .catch(err => console.error("OMG, there is an error: ", err)) // se houver um erro ao ler o arquivo, ele será tratado aqui