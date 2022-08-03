import * as C from './styles.js';
import { Outlet } from 'react-router-dom';

import { Header } from './components/Header/index.jsx';
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
