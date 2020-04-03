import React from 'react';
import { render } from 'react-dom';

function SaludarEnIdiomas({idioma}){
  if(idioma === "es"){
    return <span>Hola</span>;
  } else{ 
    return <span>Hello</span>;
  }
}

const Saludo = ()=> {
  const nombre = 'Miguel';
  return(
    <p>
      <SaludarEnIdiomas idioma="es" /> { `${nombre} =) ` }, mi componente de saludo.
    </p>
  )
}

const App = () => {
  return <h1> <Saludo /> </h1>;
}


render(<App />, document.getElementById('root'))