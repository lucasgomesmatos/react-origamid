import { lazy, Suspense, useState } from 'react';
import Header from './Header/Header';
// import Contato from './Contato/Contato';

const Contato = lazy(() => import('./Contato/Contato'));

function App() {
  const [ativo, setAtivo] = useState(false);
  return (
    <div>
      <Header />
      {ativo && (
        <Suspense fallback={<div>Carregando...</div>}>
          <Contato />
        </Suspense>
      )}
      <button onClick={() => setAtivo(!ativo)}>Ativar</button>
    </div>
  );
}

export default App;
