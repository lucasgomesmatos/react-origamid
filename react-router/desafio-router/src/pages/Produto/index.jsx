import * as C from './style';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Loading } from '../../components/Loading';
import { Head } from '../../components/Head';

export const Produto = () => {
  const [produto, setProduto] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function fetchProduto(url) {
      try {
        setLoading(true);
        const json = await (await fetch(url)).json();
        setProduto(json);
      } catch (erro) {
        setError('Um erro ocorreu');
      } finally {
        setLoading(false);
      }
    }
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <p>{error}</p>;
  if (produto === null) return null;
  return (
    <C.Container className="animaLeft">
      <Head title={produto && produto.nome} description="página home" />
      {!loading && produto && (
        <section>
          <img src={produto.fotos[0].src} alt="Contato" />
          <div>
            <h2>{produto.nome}</h2>
            <p className="preco">R$ {produto.preco}</p>
            <p className="descricao">{produto.descricao}</p>
          </div>
        </section>
      )}
    </C.Container>
  );
};
