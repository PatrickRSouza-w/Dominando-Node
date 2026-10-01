for (let i = 0, x = 1, z =2, limit = 10; i <= limit; x*= z, i++) {
    console.log(`Iteration ${i}: x: ${x}, z: ${z}`);
}

// Abordagem mais legível
let x = 1;
const z = 2, limit =10;
for (let i= 0; i <= limit; i++) {
    console.log(`i: ${i}. x: ${x}. z: ${z}`);
    x *= z;
}

