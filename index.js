import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

const Button = () =>{
  const [count, setCount] = useState(0);
  // funcionalidad que se ejecutará en cada render y puede tener efectos secundarios.
  useEffect(()=> {
    console.log("Inicio useEffect");
    return ()=> {
      console.log("Fin useEffect")
    }
  }, []); // si se pasa una lista vacia a la funcion useEffect, se ejecutará sólo una vez
  
  return (
    <button onClick={ ()=> setCount(count+1) }>Click {count}</button>
  )
}

const App = () =>{
  const [showButton, setShowButton] = useState(true);
  return (
    <div>
      <button onClick={ ()=> setShowButton(false) }>Eliminar botón</button>
      <div>
        {showButton && <Button />}
      </div>
    </div>
  );
}


render(<App />, document.getElementById('root'))