import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 2rem 2rem;
  gap: 20px;
  flex-wrap: wrap;
  transition: 0.3s all;

  h2 {
    margin: 10px 0;
  }
  img {
    display: block;
    max-width: 260px;
    border-radius: 6px;
  }

  a {
    text-decoration: none;
    color: #000;
  }
`;
