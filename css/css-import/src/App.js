import React, { useState } from 'react';
import Produto from './components/Produto';
import './styles/main.sass';

const App = () => {
  const [ative, setAtive] = useState(false);

  return (
    <div className="app">
      <Produto ative={ative} />
      <button onClick={() => setAtive(!ative)}>Buscar</button>
    </div>
  );
};

export default App;
