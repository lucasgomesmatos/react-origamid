import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Produtos } from './pages/Produtos';
import { Contato } from './pages/Contato';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Produtos />} />
          <Route path="/produto:id" element={<Produtos />} />
          <Route path="contato" element={<Contato />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
