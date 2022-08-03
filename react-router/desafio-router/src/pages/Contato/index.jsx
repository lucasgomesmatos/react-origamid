import * as C from './style';
import img from '../../assets/img/contato.jpg';

export const Contato = () => {
  return (
    <C.Container>
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
