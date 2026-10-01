// Forma clássica de fazer um fail-soft
const list = [1, 2];
const a = list[0] || 0; // Se o valor de list[0] for undefined, a variável a receberá 0 como valor padrão.
const b = list[1]
const c = list[2] || 4;

// Mesmo código porém usando desestruturação do ECMAScript 6

const list = [1, 2];
const [a = 0, b, c = 4] = list; // forma mais compacta e popular de atribuir valores padrão quando é possível combiná-los com a desestruturação de arrays. Se o valor de list[0] for undefined, a variável a receberá 0 como valor padrão. Se o valor de list[2] for undefined, a variável c receberá 4 como valor padrão.

fail-soft