// Callbacks são funções que são passadas como argumentos para outras funções e são chamadas quando a função principal é concluída. Eles são usados para lidar com operações assíncronas, como ler arquivos, fazer solicitações de rede ou interagir com bancos de dados.


const doSomething = (cb) => { // exemplo de função que espera uma função como argumento (callback)
    const error = new Error(`Something went wrong`); // criando um objeto de erro, tradução: algo deu errado
    cb(error, null); // chamando a função de callback com um erro e sem resultados
}; // chamando a função de callback com um erro e sem resultados

// Exemplo de uso da função doSomething com um callback que trata o erro e os resultados
doSomething((error, results) => { // chamando a função de callback com um erro e sem resultados
    if (error) { // verificando se houve um erro
        console.log(`there was an error`); // tradução: houve um erro
        return; // retornando da função de callback para evitar que o código continue a ser executado
    }
    console.log(`Everything went well`); // tradução: tudo correu bem
}) // resultado: There was an error

// Exemplo quando tudo da certo, sem erro:
const doSomething2 = (cb) => {
    const result = `It worked!`;
    cb(null, result);
}

doSomething2((error, result) => {
    if (error) {
        console.log(`There was an error`);
        return;
    }
    console.log(result); // resultado: It worked!
    console.log(`Everything went well`); // tradução: tudo correu bem
}) // resultado: It worked! Everything went well
// Exemplo de uso da função doSomething2 com um callback que trata o erro e os resultados