import styled from 'styled-components';
import { toastSuccess } from '../components/toasts.jsx';
export default function AddToCart({ children, product }) {
  return (
    <Button
      onClick={() => {
        let cart = JSON.parse(localStorage.getItem('cart'));
        if (cart) {
          cart.push(product);
          localStorage.setItem('cart', JSON.stringify(cart));
        } else localStorage.setItem('cart', JSON.stringify([product]));
        toastSuccess('Adicionado com sucesso');
      }}
    >
      {children}
    </Button>
  );
}

const Button = styled.div`
  width: 219px;
  height: 56px;
  background-color: black;
  border-radius: 10px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font: 700 16px 'arial';
  position: fixed;
  bottom: 16px;
  right: 24px;
`;
