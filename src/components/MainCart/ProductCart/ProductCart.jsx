import { Details, ContainerProductCart, StyledProduct, Img } from "../../../styles/productCart";

export default function ProductCart({name, image, description, price}){
    return(
        <ContainerProductCart>
            <StyledProduct>
                <Img>
                    <img src={image} alt={description} />
                </Img>
                <Details>
                    <p>{name}</p>
                    <p>Quantidade</p>
                    <p>R$ {Number(price).toFixed(2).replace('.', ',')}</p>
                </Details>
            </StyledProduct>
            <button>-</button>
        </ContainerProductCart>
    )
}