// set é um conjuto de valores em que cada vlor pode ocorrer apenas um vez, ou seja, não há valores duplicados. O set é uma coleção de valores únicos. Ele é útil quando você deseja armazenar uma lista de valores sem se preocupar com a ordem ou com a duplicação. Não contem indices.

let arr = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10];
let set = new Set(arr); // Cria um novo set a partir de um array. O set irá conter apenas os valores únicos do array, ou seja, o valor 5 será removido.
let uniques = Arrays.from(set); // Cria um novo array a partir do set. O array irá conter apenas os valores únicos do set.
console.log(uniques); // Retorna [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].

