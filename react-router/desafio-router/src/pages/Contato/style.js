import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 20px 50px;
  gap: 20px;

  h2 {
    margin: 10px 0;
  }
  ul {
    list-style: none;
  }

  li {
    margin: 10px 0;
    display: flex;
    align-items: center;
  }

  li::before {
    content: '';
    display: inline-block;
    margin-right: 5px;
    width: 15px;
    height: 3px;
    background: #444;
  }

  img {
    display: block;
    max-width: 260px;
    border-radius: 6px;
  }

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
