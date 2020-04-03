import React from 'react';
import { render } from 'react-dom';

const nombres = [
  'Miguel',
  'Soler',
  'Zavala',
  'Moi!!',
  'Papu'
]

// nos genera un error al utilizar map: Warning: Each child in a list should have a unique "key" prop.
// se agrega el key para identificar de manera unica al elemento para actualizarlo
const Nombres = () =>{
  return (
    <ul>{
    nombres.map( (nombre, index) => <li key={index} >{nombre}</li> )  
    }</ul>
  )
}

const App = () => {
  return <h1> <Nombres /> </h1>;
}


render(<App />, document.getElementById('root'))