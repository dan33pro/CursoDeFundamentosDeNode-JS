console.log('Primera instrucción');

let i = 0;
setInterval(() => {
    console.log(i);
    i++;

    if ( i === 5 ) {
        console.log('Forzamos error');
        var a = 3 + z;
    }
}, 1000);

console.log('Tecera instrucción');