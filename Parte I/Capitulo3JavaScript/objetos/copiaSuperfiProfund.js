// Cópia superficial e profunda de objetos e arrays em JavaScript

// Cópia superficial (shallow copy) é quando se cria uma cópia de um objeto ou array, mas a cópia aponta para o mesmo endereço de memória do objeto ou array original. Ou seja, se você modificar a cópia, o objeto ou array original também será modificado.

const array = [1, 2, 3, 4, 5];
const arrayCopy = array; // Cria uma cópia superficial do array original, ou seja, a cópia aponta para o mesmo endereço de memória do array original.

arrayCopy.push('Item Adicional'); // Adiciona um item na cópia do array, mas como a cópia aponta para o mesmo endereço de memória do array original, o array original também é modificado.

const object = {
    id: '1',
    name: 'Jane',
}
const objectCopy = object; // Cria uma cópia superficial do objeto original, ou seja, a cópia aponta para o mesmo endereço de memória do objeto original.

console.log(array); // resultado: [1, 2, 3, 4, 5, "item adicional"].
console.log(arrayCopy); // resultado: [1, 2, 3, 4, 5, "item adicional"].


objectCopy.name = 'Joe'; // Modifica a propriedade name do objeto original, pois a cópia aponta para o mesmo endereço de memória do objeto original.

console.log(object); // resultado: { id: '1', name: 'Joe' }.
console.log(objectCopy); // resultado: { id: '1', name: 'Joe' }.

// Os valores primitivos (string, number, boolean, null, undefined) são copiados por valor, ou seja, a cópia é independente do valor original. Já os valores não primitivos (object, array, function) são copiados por referência, ou seja, a cópia aponta para o mesmo endereço de memória do valor original. Por isso, quando se modifica a cópia de um valor não primitivo, o valor original também é modificado.

const data = {item: {detail: { reference: {id: '123'}}}}; // Cria um objeto com várias propriedades aninhadas.
const ref= data.item.detail.reference; // Cria uma referência para a propriedade reference do objeto data.
ref.name = 'Jane'; // Modifica a propriedade name da referência , que aponta para o mesmo endereço de memória da propriedade reference do objeto data.

console.log(data.item.detail.reference.name); // resultado: "Jane", pois a referência ref aponta para o mesmo endereço de memória da propriedade reference do objeto data.

// Copia profunda (deep copy) é quando se cria uma cópia de um objeto ou array, mas a cópia não aponta para o mesmo endereço de memória do objeto ou array original. Ou seja, se você modificar a cópia, o objeto ou array original não será modificado.

const array2 = [1, 2, 3, 4, 5];
const object2 = {
    id: '1',
    name: 'Jane',
}
const arrayCopy2 = [...array2]; // Cria uma cópia profunda do array original, ou seja, a cópia não aponta para o mesmo endereço de memória do array original.
const objectCopy2 = Object.assign({}, object2); // Cria uma cópia profunda do objeto original, ou seja, a cópia não aponta para o mesmo endereço de memória do objeto original.

// modifica a cópia do array e do objeto, mas não modifica o array e o objeto originais.

arrayCopy2.push('Item adicional'); // Adiciona um item na cópia do array, mas não modifica o array original.
objectCopy2.name = 'Joe'; // Modifica a propriedade name da cópia do objeto, mas não modifica o objeto original.

console.log(array2); // resultado: [1, 2, 3, 4, 5].
console.log(arrayCopy2); // resultado: [1, 2, 3, 4, 5, "Item adicional"].
console.log(object2); // resultado: { id: '1', name: 'Jane' }.
console.log(objectCopy2); // resultado: { id: '1', name: 'Joe' }.

// Porem objetos aninhados são copiados por referência, ou seja, a cópia aponta para o mesmo endereço de memória do objeto original. Por isso, quando se modifica a cópia de um objeto aninhado, o objeto original também é modificado.

const data2 = [{'a': 1}, {'b': 2}]; // Cria um array com objetos aninhados.
const shallowCopy = [...data2]; // Cria uma cópia superficial do array original, ou seja, a cópia aponta para o mesmo endereço de memória do array original.
shallowCopy[0].a = 3; // Modifica a propriedade a do objeto aninhado da cópia, que aponta para o mesmo endereço de memória do objeto aninhado do array original.

console.log(data2[0].a); // resultado: 3, pois a cópia shallowCopy aponta para o mesmo endereço de memória do objeto aninhado do array original data2.
console.log(shallowCopy[0].a); // resultado: 3, pois a cópia shallowCopy aponta para o mesmo endereço de memória do objeto aninhado do array original data2.


