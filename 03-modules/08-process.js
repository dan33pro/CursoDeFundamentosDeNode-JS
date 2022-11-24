process.on('beforeExit', () => {
    console.log('El plroceso va ha terminar');
});

process.on('exit', () => {
    console.log('El plroceso acabo');
    setTimeout(() => console.log(`Ya estoy desconectado del Event Loop, 
    F por este console.log :( 
    Ahora solo sincrono`), 0);
});

process.on('uncaughtException', (err, origen) => {
    console.log('No se ha capturado un error:\n' + err );
});
process.on('unhandleRejection', () => {
    console.log('Esta promesa fue rechazada');
});

noExite();

console.log('Si el error no se recoje no saldrá esto');
