// Clousure e uma funcao retornada por outra funcao Ex:
// Clousure e uma funcao que tem acesso ao escopo da funcao pai, mesmo depois que a funcao pai tenha sido retornada
const outerFunction = function () {
    console.log(`This is the outer function`)
    const innerFunction = function () {
        console.log(`This is the inner function`)
    }
    return innerFunction
}

//const innerFuntion = outerFunction() // Esta e a funcao externa
//innerFuntion() // Esta e a funcao interna

outerFunction()() // Execucao em uma unica linha

// Utilidade do clousure 
// Ele pode acessar ate mesmo modificar o escopo da funcao pai (bloco de codigo e argumento), mesmo depois que a funcao pai tenha sido retornada Ex:

const createCounter = (initialValue = 0) => {
    let counter = initialValue
    return (incrementalValue) => {
        counter += incrementalValue
        console.log(counter)
    }
}

const addToCounter = createCounter(10) // A funcao createCounter retorna a funcao interna, que tem acesso a variavel counter mesmo depois da funcao pai ter sido retornada
addToCounter(12) // 22
addToCounter(1) // 23