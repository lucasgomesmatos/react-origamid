import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px;
  display: flex;
  justify-content: center;
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

  .animaLeft {
    opacity: 0;
    transform: translateX(-20px);
    animation: animeLeft 0.3s forwards;
  }

  @keyframes animeLeft {
    to {
      opacity: initial;
      transform: initial;
    }
  }
`;
