let buffer1 = Buffer.alloc(4); // Buffer vacío
let buffer2 = Buffer.from([1, 2, 3, 4]);
let buffer3 = Buffer.from('Hola Mundo');

console.log(buffer1, buffer2);
console.log(buffer3, buffer3.toString());

let abc = Buffer.alloc(26);
for (let i = 0; i< 26; i++) {
    abc[i] = i + 97;
}

console.log(abc, abc.toString());