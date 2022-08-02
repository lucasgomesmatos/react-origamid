import React from 'react';
import {
  NavLink,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom';
import ProdutosCustomizados from './ProdutosCustomizados';
import ProdutosAvaliacao from './ProdutosAvaliacao';
import ProdutosDescricao from './ProdutosDescricao';

const Produtos = () => {
  const params = useParams();
  console.log(params);
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <h1>Produtos: {params.id}</h1>
      <nav style={{ display: 'flex', gap: '1rem' }}>
        <NavLink to={''}>Descricao</NavLink>
        <NavLink to={'avaliacao'}>Avaliação</NavLink>
        <NavLink to={'customizado'}>Customizado</NavLink>
      </nav>

      <Routes>
        <Route path="" element={<ProdutosDescricao />} />
        <Route path="avaliacao" element={<ProdutosAvaliacao />} />
        <Route path="customizado" element={<ProdutosCustomizados />} />
      </Routes>
    </div>
  );
};

export default Produtos;
