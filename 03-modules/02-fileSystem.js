const fs = require('fs').promises;

async function readFile(ruta) {
    try {
        const data = await fs.readFile(ruta);
        return data.toString();
    } catch (error) {
        console.log(error);
    }
}

async function writeFile(ruta, contenido) {
    try {
        await fs.writeFile(ruta, contenido);
    } catch (error) {
        console.log(error);
    }
}

async function deleteFile(ruta) {
    try {
        fs.unlink(ruta);
    } catch (error) {
        console.log(error)
    }
}

async function main() {
    await writeFile(__dirname + '/myFile.txt', 'Este es mi archivo :) con modificaciones');
    const file = await readFile(__dirname + '/myFile.txt');
    console.log(file);
    await deleteFile(__dirname + '/myFile.txt');
}

main();