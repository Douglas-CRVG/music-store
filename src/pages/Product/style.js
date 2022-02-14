import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #303030;
  display: flex;
  flex-direction: column;
  padding: 30px;
  align-items: center;

  & > img {
    width: 176px;
    aspect-ratio: 1;
    border-radius: 5px;
  }

  #goBackButton {
    filter: invert(100%);
    position: fixed;
    left: 30px;
    top: 30px;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 65%;
  background-color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 40px 24px 16px 24px;
  border-radius: 20px 20px 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  #name {
    font: 500 24px 'arial';
    word-break: break-word;
    position: absolute;
    top: 40px;
  }

  #price {
    position: fixed;
    bottom: 36px;
    left: 24px;
  }
`;

const AlbumPicture = styled.div`
  width: 176px;
  aspect-ratio: 1;
`;

export { Container, AlbumPicture, Content };
