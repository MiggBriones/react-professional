import React, { Component } from 'react';
import { render } from 'react-dom';

const nombres = [
    'Miguel',
    'Soler',
    'Zavala',
    'Moi',
    'Papu'
]

// destructiring, para no tener que acceder al elemento: props.nombre, props.idioma

// valores por defecto ECMAScript 6.  idioma = 'en'
const Saludar = ( {nombre, idioma} ) => {
    const saludo = idioma === 'es' ? 'Hola' : 'Hello';
    return <p>{saludo} {nombre}</p>
}

// NOTA. Esta opción no es recomendada, ya en que veriones posteriores se elimibarán. A manera de ejemplo y conocer distintar formas se anexa dicho ejemplo.
// asignar propiedades a la prop por de defecto
Saludar.defaultProps = {
  idioma: 'en'
}
const App = () =>{
  return <div><Saludar nombre='Mike' idioma='en'/> </div>
}


render(<App />, document.getElementById('root'))