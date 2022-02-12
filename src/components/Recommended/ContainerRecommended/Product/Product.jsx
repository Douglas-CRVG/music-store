import { Price, StyledProduct } from "../../../../styles/product";

export default function Product({ image, price, name}){
    return (
        <StyledProduct>
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <Price>
                <p>R$ {Number(price).toFixed(2).replace(".", ",")}</p>
                <p>button</p>
            </Price>
        </StyledProduct>
    )
}