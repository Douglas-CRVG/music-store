import styled from 'styled-components';
import loading from '../assets/loading.gif';

export default function PageLoading({ isLoading }) {
  if (isLoading)
    return (
      <Container>
        <img src={loading} alt='loading' />
      </Container>
    );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
