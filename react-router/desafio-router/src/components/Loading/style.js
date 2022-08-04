import styled from 'styled-components';

export const Container = styled.div`
  margin: 10rem auto;
  border: 5px solid #dcdcdc;
  border-left-color: greenyellow;
  height: 50px;
  width: 50px;
  border-radius: 100%;
  animation: loading 0.4s linear infinite;

  @keyframes loading {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
