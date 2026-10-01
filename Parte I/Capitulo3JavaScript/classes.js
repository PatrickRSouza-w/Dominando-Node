class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name}!`)
    }
}
const jane = new Human(`Jane`, 30);
console.log(jane.name); // Jane
console.log(jane.age); // 30
jane.sayHello(); // Hello, my name is Jane!

class Colleague extends Human {
    constructor(name, age, stack) {
        super(name, age); // super chama o construtor da classe pai (Human)
        this.stack = stack;
        this.canCode = true;
    }
    code() {
        console.log(` I can code in ${this.stack}!`);
    }
}
const jane2 = new Colleague (`Jane`, 30, [`JavaScript`, `React`, `MongoDB`]);
console.log(jane2.name);
console.log(jane.canCode);
jane.sayHello(); // Hello, my name is Jane!
jance.code(); // I can code in JavaScript, React, MongoDB!

// Metodos estaticos sao metodos que pertencem a classe e nao a instancia da classe. Eles podem ser chamados sem a necessidade de instanciar a classe. 
class Car {
    constructor(brand) {
        this.brand = brand;
    }
    move() {
        console.log(`The ${this.brand} is moving!`);
    }
    static speedLimits() {
        console.log(`The speed limit is 120 km/h for new cars`);
    }
}
Car.speedLimits(); // The speed limit is 120 km/h for new cars // Exemplo de metodo estatico, que pode ser chamado sem a necessidade de instanciar a classe.

// Getters e Setters sao metodos que permitem acessar e modificar propriedades de um objeto de forma controlada. Eles sao definidos com as palavras-chave get e set.
class Rectangle {
    constructor (width, height) {
        this._width = width;
        this._height = height;
    }
    set width (width) {this._width = width};
    get width () {return this._width};
    set heigth (height) {this._height = height};
    get height () {return this._height};
    get area () {return this._width * this._height};
}
const shape = new Rectangle(5, 2)
console.log(shape.area); // 10
console.log(shape.width); // 5
console.log(shape.height); // 2
shape.height = 10;
shape.width = 10;
console.log(shape.area); // 100
console.log(shape.width); // 10
console.log(shape.height); // 10