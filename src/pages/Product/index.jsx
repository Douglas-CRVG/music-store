import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { services } from '../../services/services.js';
import 'react-toastify/dist/ReactToastify.css';
import PageLoading from '../../components/PageLoading.js';
import GoBackButton from '../../components/GoBackButton.js';
import { Container, Content } from './style.js';
import AddToCart from '../../components/AddToCart.js';

export default function Product() {
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState();
  const { id } = useParams();

  useEffect(() => {
    async function getProduct() {
      try {
        setIsLoading(true);
        const res = await services.getProduct(id);
        setIsLoading(false);
        setProduct(res.data);
      } catch {
        setIsLoading(false);
      }
    }
    getProduct();
  }, [id]);

  if (isLoading) return <PageLoading isLoading={isLoading} />;

  if (!product) return '';

  return (
    <Container>
      <GoBackButton />
      <img src={product.image} alt='album' />
      <Content>
        <span id='name'>{product.name}</span>
        <span id='description'>{product.description}</span>
        <span id='price'>{`R$ ${parseFloat(product.price).toFixed(2)}`}</span>
        <AddToCart product={product}>
          <span>Adicionar ao carrinho</span>
        </AddToCart>
      </Content>
    </Container>
  );
}
