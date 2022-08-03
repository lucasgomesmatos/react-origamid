import * as C from './style';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <C.Header>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/sobre'}>Sobre</NavLink>
      <NavLink to={'/contato'}>Contato</NavLink>
    </C.Header>
  );
};
