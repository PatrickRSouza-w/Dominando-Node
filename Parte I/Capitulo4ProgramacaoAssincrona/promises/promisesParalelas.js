// promises paralelas são executadas ao mesmo tempo, ou seja, não dependem uma da outra para serem executadas.
// Ex:
const randomTimeOutPromise = () => {
    return new Promise((resolve, reject) => { 
        const time = Math.floor(Math.random() * 100); // gera um número aleatório entre 0 e 100
        setTimeout(() => { // simula um tempo de execução aleatório
            console.log(`Promise resolved after ${time}ms`);
            resolve(time);
        }, time);
    })
}


// Promise.all()
Promise.all([ // Promise.all() é um método que recebe um array de promessas e retorna uma nova promessa que é resolvida quando todas as promessas do array são resolvidas, ou rejeitada quando qualquer uma das promessas do array é rejeitada.
    randomTimeOutPromise(), // executa todas as promessas ao mesmo tempo
    randomTimeOutPromise(),
    randomTimeOutPromise(),
    randomTimeOutPromise(),
    randomTimeOutPromise(),
]).then((results) => { // quando todas as promessas forem resolvidas, o método then() é chamado com um array contendo os resultados de cada promessa.
    console.log("results:", results);
})

// Promise.race()
Promise.race([ // Promise.race() é um método que recebe um array de promessas e retorna uma nova promessa que é resolvida ou rejeitada assim que qualquer uma das promessas do array for resolvida ou rejeitada.
    randomTimeOutPromise(),
    randomTimeOutPromise(),
    randomTimeOutPromise(),
    randomTimeOutPromise(),
    randomTimeOutPromise(),
]).then((result) => {
    console.log("result:", result); // retorna o resultado da primeira promessa que for resolvida
})