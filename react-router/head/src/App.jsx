import { useState } from 'react';
import { Home } from './Pages/Home';
import { Header } from './components/Header';
import { Outlet } from 'react-router-dom';

import * as C from './App.style';
function App() {
  return (
    <div>
      <C.Container>
        <C.Area>
          <Header />
          <Outlet />
        </C.Area>
      </C.Container>
    </div>
  );
}

export default App;
