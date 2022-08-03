import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  gap: 20px;
  margin: 0 20px;
  padding: 20px;

  a {
    text-decoration: none;
    display: inline-block;
    background: #ddd;
    color: #000;
    padding: 0.6rem 0.8rem;
    border-radius: 0.2rem;
    font-weight: bold;
  }
  a:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
