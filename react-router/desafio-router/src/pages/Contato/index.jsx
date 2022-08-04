import * as C from './style';
import img from '../../assets/img/contato.jpg';
import { Helmet } from 'react-helmet';
import { Head } from '../../components/Head';

export const Contato = () => {
  return (
    <C.Container className="animaLeft">
      <Head title="Contato" description="página de contato" />
      <img src={img} alt="Contato" />
      <div>
        <h2>Entre em contato.</h2>
        <ul>
          <li>lucasgomesmatosdev@gmail.com</li>
          <li>(33) 99963-6478</li>
          <li>Rua Ali Perto, 999</li>
        </ul>
      </div>
    </C.Container>
  );
};
