console.time('Todo');
let suma = 0;

console.time('Bucle');
for (let i = 0; i < 100000000; i++) {
    suma++;
}
console.timeEnd('Bucle');

console.time('Bucle 2');
let suma2 = 0;
for (let i = 0; i < 1000000000; i++) {
    suma2 = suma2 + 1;
}
console.timeEnd('Bucle 2');

console.time('Asíncrono');
console.log('Empieza el proceso asíncrono');
asincrona()
    .then((response) => console.log(response))
    .finally(() => console.timeEnd('Asíncrono'));

console.timeEnd('Todo');

function asincrona() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Termina el proceso asíncrono');
        }, 1000);
    });
}