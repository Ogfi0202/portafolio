//alert ("Hola Mundo");

let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
});

//reconoce una caccion porque tiene un parentesis despues del nombre de la accion 
//aveces tiene el operador punto
typewriter
    .pauseFor(2500)//milisegundos 2.5 segundos
    .typeString('Fernanda Octaviano')
    .pauseFor(300)
    .deleteAll()
    .typeString('Desarrolladora FRONTEND JR ')
    .pauseFor(1000)
    .start();

//nueva linea
let frase = document.getElementById('frase');

let typewriterfrase = new Typewriter(frase, {
    loop: true,
    delay: 75,
});
typewriterfrase
    .pauseFor(2500)
    .typeString('Puedes encontrar muchas derrotas, pero no debes se derrotado.De hecho, puede ser necesario encontrar las derrotas, para que puedas saber quién eres, de qué puedes levantarte, y cómo todavía puedes salir de ello')
    .pauseFor(300)
    .deleteAll()
    .typeString('Maya Angelou')
    .pauseFor(1000)
    .start();