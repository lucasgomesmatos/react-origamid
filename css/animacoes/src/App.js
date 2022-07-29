import React, { useState } from 'react';
import Produto from './Produto';
import './styles/style.sass';

const App = () => {
  const [ativo, setAtivo] = useState(false);

  return (
    <div>
      <button onClick={() => setAtivo(!ativo)}>Ativar</button>
      {ativo && <Produto />}
    </div>
  );
};

export default App;
