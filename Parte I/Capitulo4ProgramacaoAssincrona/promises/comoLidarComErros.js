// lidar com erros em promises com reject().

const generatePromise = shouldFail => { // função que retorna uma promessa que pode ser resolvida ou rejeitada dependendo do valor de shouldFail
    return new Promise((resolve, reject) => { // cria uma nova promessa
        if (shouldFail) { // se shouldFail for true, a promessa é rejeitada com um erro
            return reject(new Error("Rejected!"));
        }
        resolve("Success!");
    });
};

generatePromise(true).catch(error => console.log("Error message:", error));  // se a promessa for rejeitada, o método catch() é chamado com o erro

// Importante observar que a funçaõ reject não interrompe a execução do código. Por isso, é necessário retornar a função depois invocar a função reject() para que o código não continue a ser executado após a rejeição da promessa.

// Promise.finally() é um método que é chamado independentemente de a promessa ser resolvida ou rejeitada. Ele é útil para executar código de limpeza ou finalização, como fechar conexões ou liberar recursos.

generatePromise(true)
.then(result => console.log("Result:", result)) // se a promessa for resolvida, o método then() é chamado com o resultado
.catch(error => console.log("Error message:", error)) // se a promessa for rejeitada, o método catch() é chamado com o erro
.finally(() => console.log("Promise settled")); // o método finally() é chamado independentemente de a promessa ser resolvida ou rejeitada

// Encadeamento de Promises é uma técnica que permite executar várias operações assíncronas em sequência, onde cada operação depende do resultado da anterior. Isso é feito encadeando chamadas de `then()` e `catch()`.

generatePromise() // chamando a função generatePromise() que retorna uma promessa resolvida
    .then(generatePromise) // encadeando o método then() para chamar a função generatePromise() novamente, que retorna uma nova promessa resolvida
    .then(result => { // encadeando o método then() para lidar com o resultado da promessa resolvida
        return generatePromise(true); // chamando a função generatePromise() novamente, mas desta vez passando true como argumento, o que fará com que a promessa seja rejeitada
    })
    .then(() => console.log("This will not be  called")) // encadeando o método then() para lidar com o resultado da promessa resolvida, mas como a promessa anterior foi rejeitada, este bloco não será executado
    .catch(error => console.log("Error message:", error)); // encadeando o método catch() para lidar com o erro da promessa rejeitada, imprimindo a mensagem de erro no console

