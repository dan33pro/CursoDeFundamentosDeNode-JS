console.group('Información:')
    console.log('Este es un log');
    console.info('Este es un info');
console.groupEnd('Información:');

console.group('Alertas:')
    console.error('Este es un error');
    console.warn('Este es un warn');
console.groupEnd('Alertas:');

let tabla = [
    {
        nombre: 'Daniel',
        edad: 19,
    },
    {
        nombre: 'Lucas',
        edad: 18,
    }
];

console.group('Utilidades:');
    console.group('Este es un table:');
        console.table(tabla);
    console.groupEnd('Este es un table:');

    console.group('Estos son count:');
        console.count('veces');
        console.count('veces');
        console.count('veces');
        console.countReset('veces');
        console.count('veces');
        console.count('veces');
        console.count('veces');
    console.groupEnd('Estos son count:');
console.groupEnd('Utilidades:');