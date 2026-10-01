// quando async é usado em uma função, ele indica que a função retornará uma promise. Isso significa que a função pode ser usada com o método then para lidar com a resolução da promise. 

const asyncFun = async (generateError) => { // função assíncrona que retorna uma promise
    if (generateError) { // se generateError for true, a função lançará um erro, o que fará com que a promise seja rejeitada
        throw new Error("Error generated!"); // lançando um erro, o que fará com que a promise seja rejeitada
    }
    return 1; // se generateError for false, a função retornará 1, o que fará com que a promise seja resolvida com o valor 1
};

// ( await ) é usado para esperar a resolução de uma promise antes de continuar a execução do código. Ele só pode ser usado dentro de uma função assíncrona. Se a promise for resolvida, o valor resolvido será retornado. Se a promise for rejeitada, um erro será lançado.

// Promises

fetch('https://api.demo.foo/v1/todo')
.then(response => response.json())
.then(json => console.log(json))
.catch(error => console.log(error));

// Async/Await

const fechData = async () => { // função assíncrona que faz uma solicitação HTTP para a URL especificada e retorna a resposta em JSON
    try { 
        const response = await fetch('https://api.demo.foo/v1/todo'); // await é usado para esperar a resolução da promise retornada pela função fetch antes de continuar a execução do código
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.log(error);
    }
}

fetchData(); // [userId: 1, id: 1, title: "delectus aut autem", completed: false]

// ( await ) só pode ser usada dentro de uma função assíncrona. Se você tentar usar await fora de uma função assíncrona, você receberá um erro de sintaxe. É nescessário usar o bloco de try/catch para lidar com erros que podem ocorrer durante a execução da função assíncrona. Se um erro for lançado dentro do bloco try, ele será capturado pelo bloco catch, permitindo que você lide com o erro de forma adequada.