// fs serve para manipular arquivos e diretórios / ler, escrever, criar, deletar, renomear, etc. Ele é um módulo nativo do Node.js que fornece uma API para interagir com o sistema de arquivos.

import { readFile } from 'node:fs';


readFile('hello.txt', 'utf8', (err,content) => {
    if (err) { // se houver um erro ao ler o arquivo, ele será tratado aqui
        console.error("OMG, there is an error: ", err);
        return;
    }
    console.log(`File content: ${content}`); // imprimindo o conteúdo do arquivo hello.txt no console
})