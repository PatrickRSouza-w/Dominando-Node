// Como callback é definidio com argumento e como umma função é transmitiida como argumento quando execução ocorre.

// 1ª exemplo - função(doSomething) que espera uma função como argumento:

const doSomething = (cb) => { // 
    console.log('Doing something...');
    cb(); // chamando a função de callback
}

const nextStep = () => {
    console.log('Callback called');
};
doSomething(nextStep); // passando a função nextStep como argumento para doSomething

// Resultado:
// Doing something...
// Callback called

// Também pode transmitir uma função anônima como argumento, é a forma mais comum de usar callbacks. Na maioria dos casos, não reutilizamos essa função mais tarde:

doSomething(() => {
    console.log('Callback called 2');
}); // passando uma função anônima como argumento para doSomething

// Resultado:
// Doing something...
// Callback called 2

// Também é possível transmitir uma função que recebe argumentos:
    const calculateNameLength = (name, cb) => {
        const length = name.length;
        cb(length); // chamando a função de callback com o resultado do cálculo
    }

calculateNameLength('John', (length) => {
    console.log(`The name length is ${length}`); // chamando a função de callback com o resultado do cálculo. Resultado: The name length is 4
})
