import { StyledMainCart } from "../../styles/MainCart";
import ProductCart from "./ProductCart/ProductCart";

export default function MainCart({acquired, setAcquired}){
    function deleteProductCart(name){
        const result = acquired.find(product => product.name === name)
        const index = acquired.indexOf(result);
        const newCart = acquired.filter((item, idx) => idx !== index)
        setAcquired(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
    }
    return (
        <StyledMainCart>
            {acquired.length === 0?
                <h1>Nenhum pedido no carrinho</h1>
                :
                acquired.map((product, index) => <ProductCart key={index} product = {product} deleteProductCart={deleteProductCart}/>)}
        </StyledMainCart>
    );
}