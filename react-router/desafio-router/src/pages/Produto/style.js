import styled from 'styled-components';

export const Container = styled.div`
  section {
    display: flex;
    margin: 20px 50px;
    gap: 20px;
  }
  div {
    display: flex;
    flex-direction: column;
    margin: 20px;
    gap: 20px;
  }

  .descricao {
    max-width: 300px;
  }

  .preco {
    width: 100px;
    border-radius: 0.6rem;
    text-align: center;
    padding: 0.6rem 0.8rem;
    background: greenyellow;
    color: green;
    font-weight: bold;
  }

  h2 {
    margin: 10px 0;
  }

  img {
    display: block;
    max-width: 260px;
    border-radius: 6px;
  }
`;
