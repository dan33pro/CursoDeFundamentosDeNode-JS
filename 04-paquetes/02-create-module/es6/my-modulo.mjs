let usuario = {
    name: '',
    last_name: '',
    edad: 0,
};

function saludar() {
    console.log('Hola Gente!!');
}

function registrar( nName = 'Daniel', nLast_name = 'Cespedes', nEdad = 19 ) {
    usuario.name = nName;
    usuario.last_name = nLast_name;
    usuario.edad = nEdad;

    console.log('Un gusto conocerte ' + usuario.name );
}

function despedirse() {
    console.log('Adios ' + usuario.name + ' :)');
}

export default { saludar, registrar, despedirse, usuario };