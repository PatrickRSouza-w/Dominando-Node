//setTimeout(); // Usada para executar uma função após um determinado período de tempo (em milissegundos). A função será executada apenas uma vez após o tempo especificado.
//setInterval(); // Usada para executar uma função repetidamente a cada determinado período de tempo (em milissegundos). A função será executada várias vezes, conforme o intervalo especificado.

// setTimeout() Ex:
console.log('Before setTimeout');
const secondInMilliseconds = 3000; // 3 segundos
setTimeout(() => {
    console.log(`A second has passed`);
}, secondInMilliseconds);
console.log(`after setTimeout`);
// resultado:
// Before setTimeout
// depois de 3 segundos...:
// after setTimeout
// A second has passed

// setInterval() Ex:
const secondInMilliseconds2 = 3000;
let totalExections = 0; // contador de execuções
console.log(`Before setInterval`);
setInterval(() => {
    totalExections++;
    console.log(`A second has passes, this is the ${totalExections} execution`);
}, secondInMilliseconds2);
// resultado:
// Before setInterval
// depois de 3 segundos...:
// A second has passes, this is the 1 execution
// depois de 6 segundos...:
// A second has passes, this is the 2 execution
// depois de 9 segundos...:
// A second has passes, this is the 3 execution
// e assim por diante...
