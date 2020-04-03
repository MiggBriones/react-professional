import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';


const Saludo = ()=>{
  const [name, setName] = useState("");
  return (
    <div>
      { /* clase interna de react. syntheticEvent */}
      <input type="text" onChange={ (ev)=> setName(ev.target.value) }/>
      <p>Hola {name} </p>
    </div>
  )
}

const App = ()=> {
  return <div><Saludo /></div>
}

render(<App />, document.getElementById('root'))