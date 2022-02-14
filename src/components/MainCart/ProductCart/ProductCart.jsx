import { Details, ContainerProductCart, StyledProduct, Img } from "../../../styles/productCart";

export default function ProductCart({product, deleteProductCart}){
    const {name, image, description, price} = product
    return(
        <ContainerProductCart>
            <StyledProduct>
                <Img>
                    <img src={image} alt={description} />
                </Img>
                <Details>
                    <p>{name}</p>
                    <p>R$ {Number(price).toFixed(2).replace('.', ',')}</p>
                </Details>
            </StyledProduct>
            <button onClick={() => deleteProductCart(name)}>-</button>
        </ContainerProductCart>
    )
}