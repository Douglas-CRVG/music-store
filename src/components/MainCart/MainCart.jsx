import { StyledMainCart } from "../../styles/MainCart";
import ProductCart from "./ProductCart/ProductCart";

export default function MainCart({acquired}){
    return (
        <StyledMainCart>
            {acquired.length === 0?
                <h1>Nenhum pedido no carrinho</h1>
                :
                acquired.map((product, index) => <ProductCart key={index} {...product} />)}
        </StyledMainCart>
    );
}