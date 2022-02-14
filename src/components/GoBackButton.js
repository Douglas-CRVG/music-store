import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import leftChevron from '../assets/left-chevron.svg';

export default function GoBackButton() {
  const navigate = useNavigate();
  return (
    <Div onClick={() => navigate(-1)} id='goBackButton'>
      <img src={leftChevron} alt='go back' />
    </Div>
  );
}

const Div = styled.div`
  img {
    width: 30px;
  }
`;
