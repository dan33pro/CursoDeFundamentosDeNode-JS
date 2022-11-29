const fs = require('fs');
const stream = require('stream');

//      Lectura de un archivo por paquetes
let data = "";
let readStream = fs.createReadStream(__dirname + '/input.txt');
readStream.setEncoding('utf-8');

//      Lectura de un Stream
function streamDeLectura(myStream = readStream) {
    myStream.on('data', (chunk) => {
        console.log(chunk);
        data += chunk;
    });
    
    myStream.on('end', () => console.log(data));
}

//      Escritura en el Buffer de salida del sistema
function escrituraDirecta(array = ['Hola', 'Que', 'Tal \n']) {
    array.forEach(item => process.stdout.write(item + " "));
}


// Stream de doble dirección Lectura y Escritura
const Transform = stream.Transform;
class UpperCase extends Transform {
    constructor() {
        super();
        Transform.call(this);
    }
    _transform = (chunk, codif, cb) => {
        let chunkUpperCase = chunk.toString().toUpperCase();
        this.push(chunkUpperCase);
        cb();
    };
}

function streamDobleDireccion(myStream = readStream) {
    let mayus = new UpperCase();

    myStream
        .pipe(mayus)
        .pipe(process.stdout);
}

// escrituraDirecta("Como van mundo".split(" "));
// streamDeLectura(readStream);
streamDobleDireccion(readStream);
