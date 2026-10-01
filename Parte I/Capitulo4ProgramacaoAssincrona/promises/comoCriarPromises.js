// É possível criar uma promise usando o construtor Promise, que recebe uma função com dois parâmetros: resolve e reject. A função resolve é chamada quando a operação assíncrona é bem-sucedida, enquanto a função reject é chamada quando ocorre um erro.
// Exemplo:

const setTimeoutPromise = (time) => { // função que retorna uma promise que será resolvida após um determinado tempo
    return new Promise((resolve, rejejct) => { // criando uma nova promise que recebe uma função com dois parâmetros: resolve e reject
        setTimeout(() => { // chamando a função setTimeout para simular uma operação assíncrona que leva um determinado tempo para ser concluída 
            resolve(); // chamando a função resolve para indicar que a operação assíncrona foi concluída com sucesso
        }, time); // definindo o tempo que a operação assíncrona levará para ser concluída
    })
}

console.log(`Depois setTimeoutPromise`);
setTimeoutPromise(1000).then(() => console.log('Um segundo depois')); // chamando a função setTimeoutPromise e encadeando o método then para lidar com a resolução da promise'



//setTimeout() é uma função padrão do JavaScript que permite executar uma função após um determinado tempo em milissegundos. Ela é frequentemente usada para simular operações assíncronas, como chamadas de API ou operações de leitura/escrita em arquivos, que podem levar algum tempo para serem concluídas.

// metodo then faz parte da API de promises e é usado para lidar com a resolução de uma promise. Ele recebe uma função de callback que será executada quando a promise for resolvida com sucesso. O método then também retorna uma nova promise, permitindo o encadeamento de múltiplas operações assíncronas.