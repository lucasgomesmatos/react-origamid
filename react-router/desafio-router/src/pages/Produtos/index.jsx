import { useEffect, useState } from 'react';
import * as C from './style.js';
import { NavLink } from 'react-router-dom';
import { Head } from '../../components/Head/index.jsx';
import { Loading } from '../../components/Loading/index.jsx';

export const Produtos = () => {
  const [produtos, setProdutos] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProdutos(url) {
      try {
        setLoading(true);
        const json = await (await fetch(url)).json();
        setProdutos(json);
      } catch (erro) {
        setError(`Error ao carregar ${erro}`);
      } finally {
        setLoading(false);
      }
    }

    fetchProdutos('https://ranekapi.origamid.dev/json/api/produto');
  }, []);

  if (loading) return <Loading />;
  if (error) return <div>{error}</div>;
  if (produtos === null) return false;
  return (
    <section>
      <Head title="Home | Produtos" description="página home" />
      <C.Container className="animaLeft">
        {produtos &&
          produtos.map((produto) => (
            <NavLink to={`produto/${produto.id}`} key={produto.id}>
              <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
              <h2>{produto.nome}</h2>
            </NavLink>
          ))}
      </C.Container>
    </section>
  );
};
