// encadeamento opcional é um novo operador introduzido no es2020
// é possível acessar profundamento prpriedades aninhadas de um objeto sem precisar se preocupar se a propriedade existe ou não

const user = {
    name: 'Jane',
    adress: {
        street: 'Main Street'
    }
};

const otherUSer = {
        name: 'Jane',
    };

console.log(user.adress?.street); // Main Street
console.log(otherUSer.address?.street); // undefined

// Sem encadeamento opcional:
console.log(user.adress.street); // Main Street
console.log(otherUSer.address.street); // TypeError: Cannot read properties of undefined (raeding 'street')