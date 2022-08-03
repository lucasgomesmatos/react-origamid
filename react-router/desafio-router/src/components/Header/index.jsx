import * as C from './style';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <C.Container>
      <NavLink to={'/'}>Produtos</NavLink>
      <NavLink to={'/contato'}>Contato</NavLink>
    </C.Container>
  );
};
