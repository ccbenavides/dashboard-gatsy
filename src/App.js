import React, { useState }  from 'react';
import './App.css';

function App() {
  const [contador, contadorSet ] = useState(0)

  return (
    <div className="App">
        <h1>Hola Mundo</h1>
        <span className='text-lg'>{contador}</span>
        <br />
        <button onClick={ () => contadorSet(contador+ 1) } >incrementar</button>

        <button onClick={ () => contadorSet(contador- 1) }>Decrementar</button>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente minus voluptatum optio, officiis, repellendus praesentium explicabo quo libero blanditiis esse corporis, eaque vitae dolorum reprehenderit doloremque porro amet est molestias.
        </p>
    </div>
  );
}

export default App;
