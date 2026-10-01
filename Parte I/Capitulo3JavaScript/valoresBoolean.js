// Tem valores que retornam true
console.log("String: ", Boolean("Ulises"));
console.log("1235: ", Boolean(1235));
console.log("1235: ", Boolean(-1235));
console.log("Object: ", Boolean({text: "hi"}));
console.log("Array: ", Boolean(["apple", -1, false]));
console.log("Function: ", Boolean(function(){}));
console.log("Arrow funtion: ", Boolean);
// Faltou copiar o resto, mas em resumo, tudo que fica vazio retorna false.