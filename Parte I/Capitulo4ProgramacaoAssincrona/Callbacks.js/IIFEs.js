// IIFE é uma função que é executada imediatamente depois de ser criada. Ela é útil para criar um escopo isolado e evitar a poluição do escopo global. A sintaxe de uma IIFE envolve envolver a função em parênteses e, em seguida, invocá-la com outro par de parênteses.

(function () { // criando uma IIFE
    // ... algum código aqui
})(); // invocando a função imediatamente após sua criação

// usando ( async e await ) dentro de uma IIFE

(async () => {
    const response = await fetch('https://api.demo.foo/v1/todo');
    const json = await response.json();
    console.log(json);
})()
