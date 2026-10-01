import { readFileSync } from 'fs'; // importa a função readFileSync do módulo fs do Node.js

try {
    const content = readFileSync('hello.txt'); // lê o conteúdo do arquivo hello.txt de forma síncrona
    console.log(`File content: ${content}`); // imprime o conteúdo do arquivo hello.txt no console
} catch (err) {
    console.error("OMG, there is an error: ", err); // se houver um erro ao ler o arquivo, ele será tratado aqui
};
