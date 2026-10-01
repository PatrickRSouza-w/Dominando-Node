const dst = { quux: 0 };
const src1 = { foo: 1, bar: 2 };
const src2 = { foo: 3, baz: 4 };

Object.assign(dst, src1, src2); // Copia as propriedades dos objetos src1 e src2 para o objeto dst. Se houver propriedades com o mesmo nome, a última propriedade copiada sobrescreve a anterior.

// Desestruturação de objetos é uma forma de extrair valores de um objeto e atribuí-los a variáveis. Ela permite que você extraia múltiplas propriedades de um objeto em uma única expressão.

const name = 'Jane';
const age = 25;
const data = { item: 'lorem Ipsum', status: 'OK'};

const user = {name, age, data};
const { item, status } = data;