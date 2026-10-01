const array = [1, 2, 3, 4, 5];
console.log(Array.isArray(array)); // Verifica se a variável é um array. Retorna true se for um array, caso contrário, retorna false.

const object = { name: "John", age: 30 };
console.log(Array.isArray(object)); // Verifica se a variável é um array. Retorna true se for um array, caso contrário, retorna false.

console.log(typeof array); // Retorna o tipo da variável, que é "object" para arrays.
console.log(typeof object); // Retorna o tipo da variável, que é "object" para objetos.

// Não possível compara arrays diretamente com o operador de igualdade (== ou ===), pois eles são objetos e a comparação será feita por referência, não por valor. Para comparar arrays, é necessário verificar cada elemento individualmente ou usar métodos específicos.

const array1 = [1, 2, 3];
const array2 = [1, 2, 3];

console.log(array1 === array2); // false, pois são referências diferentes na memória.
console.log(array1 == array2); // false, pois são referências diferentes na memória.

// Criação de um array

const emptyArray = [];
const numbers = [1, 2, 3];
const strings = ["hello", "world"];
const mixed = [1, "hello", true];

const array = Array.of(1, 2, 3); // Cria um array com os elementos fornecidos. 

console.log(Array.from('packt')); // Cria um array a partir de um objeto iterável, como uma string. Retorna ['p', 'a', 'c', 'k', 't'].

console.log(Array.from([1, 2, 3], x => x + x)); // Cria um array a partir de um objeto iterável, aplicando uma função a cada elemento. Retorna [2, 4, 6].

console.log(Array.from([1, 2, 3], x => console.log(x.valueOf()))); // Cria um array a partir de um objeto iterável, aplicando uma função a cada elemento. Retorna [1, 2, 3] e imprime o valor de cada elemento no console.

// Acessar elementos de um array

const fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // Acessa o primeiro elemento do array. Retorna "apple".
console.log(fruits[1]); // Acessa o segundo elemento do array. Retorna "banana".
console.log(fruits[2]); // Acessa o terceiro elemento do array. Retorna "cherry".

// Modificar elementos de um array

fruits[0] = "grape"; // Modifica o primeiro elemento do array.
console.log(fruits); // Retorna ["grape", "banana", "cherry"].

// Adicionar elementos a um array

fruits.push("orange"); // Adiciona um elemento ao final do array.
console.log(fruits); // Retorna ["grape", "banana", "cherry", "orange"].

fruits.unshift("kiwi"); // Adiciona um elemento ao início do array.
console.log(fruits); // Retorna ["kiwi", "grape", "banana", "cherry", "orange"].

// Remover elementos de um array

fruits.pop(); // Remove o último elemento do array.
console.log(fruits); // Retorna ["kiwi", "grape", "banana", "cherry"].

fruits.shift(); // Remove o primeiro elemento do array.
console.log(fruits); // Retorna ["grape", "banana", "cherry"].

// interar sobre elementos de um array

Array.prototype.map(); // Cria um novo array com os resultados da chamada de uma função para cada elemento do array.

Array.prototype.forEach(); // Executa uma função para cada elemento do array, mas não retorna um novo array.

//Exemplo de uso do map e forEach

const numbers = [1, 2, 3, 4, 5];
const mapTransformation = numbers.map(el => el * 10);

const forEachTransformation = []; // Cria um array vazio para armazenar os resultados do forEach.
numbers.forEach(el => {
    forEachTransformation.push(el * 10);
});

// validação se o array contém um elemento específico ou se todos os elementos do array atendem a uma condição específica

Array.prototype.every(); // Verifica se todos os elementos do array atendem a uma condição específica. Retorna true se todos os elementos atenderem à condição, caso contrário, retorna false.

Array.prototype.some(); // Verifica se pelo menos um elemento do array atende a uma condição específica. Retorna true se pelo menos um elemento atender à condição, caso contrário, retorna false.

Array.prototype.includes(); // Verifica se o array contém um elemento específico. Retorna true se o elemento estiver presente, caso contrário, retorna false.

// Filtragem
Array.prototype.filter(); // Cria um novo array com todos os elementos que atendem a uma condição específica. Retorna um novo array com os elementos filtrados.
// Exemplo de uso do filter
const numbers = [1, 2, 3, 4, 5];
const filteredNums = numbers.filter(el => el <= 3); // Retorna um novo array com os elementos que atendem à condição (<= 3). filteredNums será [1, 2, 3]. Usando array function, o filter cria um novo array com os elementos que atendem à condição especificada na função de callback.

// metodos relevantes para está categoria:
Array.prototype.slice(); // Retorna uma cópia superficial de uma parte do array em um novo array. Aceita dois parâmetros: o índice inicial e o índice final (opcional).

Array.prototype.find(); // Retorna o valor do primeiro elemento do array que satisfaz a função de teste fornecida. Caso contrário, retorna undefined.

Array.prototype.findIndex(); // Retorna o índice do primeiro elemento do array que satisfaz a função de teste fornecida. Caso contrário, retorna -1.

// Utilitários para arrays
const data = [1, [2, 3], [4, 5]];
const flatData = data.flat(); // Retorna um novo array com todos os elementos de sub-arrays concatenados em um único nível. flat() é útil para "achatar" arrays aninhados.
console.log(flatData); // Retorna [1, 2, 3, 4, 5].

const people = ['joe', 'jane', 'john', 'jack'];
console.log(people.join()); // Retorna uma string com todos os elementos do array concatenados, separados por vírgula. Retorna "joe,jane,john,jack".
console.log(people.join(' + ')); // Retorna uma string com todos os elementos do array concatenados, separados pelo separador especificado. Retorna "joe + jane + john + jack".

const numbers = [7, 1, 10, 3, 15, 20];
console.log(numbers.sort()); // Ordena os elementos do array em ordem alfabética (ou lexicográfica) e retorna o array ordenado. Retorna [1, 10, 15, 20, 3, 7]. Note que a ordenação padrão é baseada na conversão dos elementos para strings. Por isso, os números não são ordenados numericamente. Para ordenar numericamente, é necessário fornecer uma função de comparação.

console.log(numbers.sort((a, b) => a - b)); // Ordena os elementos do array em ordem crescente e retorna o array ordenado. Retorna [1, 3, 7, 10, 15, 20]. A função de comparação (a, b) => a - b é usada para ordenar os números numericamente.

// Metodos que irão ser usados com bastante frequência:
Array.prototype.reverse(); // Inverte a ordem dos elementos do array e retorna o array invertido. Retorna [20, 15, 10, 7, 3, 1].

Array.prototype.concat(); // Combina dois ou mais arrays e retorna um novo array. Retorna [1, 2, 3, 4, 5, 6, 7, 8, 9].

Array.prototype.fill(); // Preenche todos os elementos do array com um valor estático e retorna o array preenchido. Retorna [0, 0, 0, 0, 0].

Array.prototype.reduce(); // Aplica uma função a um acumulador e a cada elemento do array (da esquerda para a direita) para reduzi-lo a um único valor. Retorna 15, que é a soma de todos os elementos do array [1, 2, 3, 4, 5].

