// Ele é utilizado para verificar se uma variável é nula ou indefinida, caso seja, ele retorna o valor do lado direito do operador. Caso contrário, ele retorna o valor da variável.

const name = null ?? "Patrick";
console.log(name); // Patrick

const age = undefined ?? 30;
console.log(age); // 30

