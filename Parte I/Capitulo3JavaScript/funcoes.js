// Funções Anônimas
setTimeout(function(){
    console.log('1 second later')
}, 1000);

// Argumentos (rest)
function sum (...numbers) {
    console.log('First Number:', numbers[0])
    console.log('Last Number:', numbers[numbers.length - 1])
    let total =0
    for (let number of numbers) {
        total=+ number
    }
    console.log('Total (SUM):', total)
}
const restult = sum(1, 2, 3, 4, 5)
// Firs Number: 1
// Last Number: 5
// Total (SUM): 15
 
// Funções de seta => 
    // Sem =>
const sampleFunction = function () { }
const sayHelloNow = function (name) {
    const now = new Date()
    console.log(`Hello ${name}, at ${now}!`)
}

    // Com =>
const sampleFunction2 = () => {}
const sayHelloNow2 = name => {
    const now = new Date()
    console.log(`Hello ${name}, at ${now}!`)
}

sayHelloNow('Claudio')

// Pode usar seta sem usar (return)
const alwaysTrue = () => true;
const getData = (name, age) => ({ name: `John`, age: 25})

// Como seria com (function)
const alwaysTrue2 = function () { return true }
const getData2 = function (name, age) {
    return { name: `John`, age: 25}
}

// => tambem recebem argumento, mas se foir mais de 1 tera que usar parenteses
const sum = function (a, b) { return a + b}
// traducao para funcao de seta
const sum2 = (a, b) => a + b

// As funcoes => nao possuem (prototype) ou seja nao podem ser usada como construtores nem manipuladores de metodos