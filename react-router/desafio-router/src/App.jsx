import * as C from './styles.js';
import { Outlet } from 'react-router-dom';

import { Header } from './components/Header/index.jsx';
import { Footer } from './pages/Footer/index.jsx';
import { Loading } from './components/Loading/index.jsx';
function App() {
  return (
    <div>
      <C.Container>
        <C.Area>
          <Header />
          <Outlet />
        </C.Area>
        <Footer />
      </C.Container>
    </div>
  );
}

export default App;
