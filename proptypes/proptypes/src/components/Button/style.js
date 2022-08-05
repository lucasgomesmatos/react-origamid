import styled from 'styled-components';

export const Button = styled.button`
  background: palevioletred;
  margin-top: 2rem;
  padding: 8px 10px;
  font-weight: bold;
  text-transform: uppercase;
  border: 2px solid transparent;
  -webkit-box-shadow: 26px 31px 22px -20px rgba(0, 0, 0, 0.23);
  -moz-box-shadow: 26px 31px 22px -20px rgba(0, 0, 0, 0.23);
  box-shadow: 26px 31px 22px -20px rgba(0, 0, 0, 0.23);
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background: transparent;
    border-color: palevioletred;
  }
`;
