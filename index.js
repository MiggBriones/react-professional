import React, { Component } from 'react';
import { render } from 'react-dom';

// componente funcional
function App3(){
  return <h1>App</h1>
}
const App3 = ()=> <h1>App2</h1>


// componente de clase
class App extends Component {
  render() {
    return <h1>App</h1>
  }
}

render(<App />, document.getElementById('root'))