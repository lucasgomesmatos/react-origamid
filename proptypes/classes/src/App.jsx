import React, { useState } from 'react';
import Produtos from './Produto';

const App = () => {
  const [ativar, setAtivar] = useState(false);

  return (
    <div>
      {ativar && <Produtos titulo={'Esse é meu título'} />}
      <button style={{ marginTop: '1rem' }} onClick={() => setAtivar(!ativar)}>
        Ativar
      </button>
    </div>
  );
};

export default App;
