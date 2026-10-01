// Objetos são valores primitivos que possuem propriedades e métodos. Eles são usados para armazenar dados e funcionalidades relacionadas a esses dados. Em JavaScript, os objetos são criados usando a sintaxe de chaves {} e podem conter pares de chave-valor.

// Como criar um objeto em JavaScript

const person = {}; // Cria um objeto vazio.

const person1 = {
    name: 'Jane',
}; // Cria um objeto com uma propriedade name.

const person2 = { // Cria um objeto com várias propriedades e métodos e arrays.
    name: 'Jane',
    id: 1,
    favoriteColors: ['blue', 'green'],
    address: {
        street: 'Mains St',
        number: 100, 
    },
    fullName: function() {
        return `${this.name} Doe`; // Retorna o nome completo da pessoa.
    },
    sayHi: function() {
        console.log('Hello!');
    }
}

console.log(person2.fullName()); // Retorna "Jane Doe".
person2.sayHi(); // Retorna "Hello!".
console.log(person2.address.street); // Retorna "Mains St".
console.log(person2.id); // Retorna 1.
console.log(person2.favoriteColors[0]); // Retorna "blue".

// Como acessar / criar propriedades de um objeto
const person3 = {
    id: 12
};
person3.name = 'Jane'; // Cria uma nova propriedade name no objeto person3.
console.log(person3.name); // Retorna "Jane".
person3.id = 13; // Modifica a propriedade id do objeto person3.
console.log(person3.id); // Retorna 13.

const person4 = {
    id: 12,
}
console.log(person4['id']); // Acessa a propriedade id do objeto person4 usando a notação de colchetes. Retorna 12.'
const specialKey = 'first name with spaces';
person[specialKey] = 'Jane'; // Cria uma nova propriedade com um nome especial no objeto person4 usando a notação de colchetes.
console.log(person[specialKey]); // Acessa a propriedade com um nome especial do objeto person4 usando a notação de colchetes. Retorna "Jane".

// Como deletar propriedades de um objeto
const person5 = {
    name: 'Jane',
    id: 12,
}
delete person5.id; // Deleta a propriedade id do objeto person5.
person5.name = undefined; // Define a propriedade name do objeto person5 como undefined, mas não a deleta.
console.log(person5.id); // Retorna undefined.
console.log(person5.name); // Retorna undefined..
