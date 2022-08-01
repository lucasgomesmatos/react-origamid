import React, { useState } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: ${({ ativo }) => (ativo ? '#000' : 'tomato')};
  font-size: 2rem;
`;

const Button = styled.button`
  padding: 0.6rem 0.8rem;
  background: tomato;
  font-weight: bold;
  text-transform: uppercase;
  &:hover {
    background: #fff;
    color: tomato;
    cursor: pointer;
  }
`;

const App = () => {
  const [ativo, setAtivo] = useState(false);

  return (
    <div>
      <Title ativo={ativo}>Meu Título</Title>
      <Button onClick={() => setAtivo(!ativo)}>Mudar cor do Titulo</Button>
    </div>
  );
};

export default App;
