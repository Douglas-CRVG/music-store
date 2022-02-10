import styled from 'styled-components';

export default function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}

const StyledButton = styled.button`
  width: 100%;
  height: 46px;
  background-color: #939393;
  font: 700 20px 'arial';
  color: white;
  border-radius: 5px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
