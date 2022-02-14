import { Details, ContainerProductCart, StyledProduct, Img } from "../../../styles/productCart";

export default function ProductCart(){
    return(
        <ContainerProductCart>
            <StyledProduct>
                <Img>
                    <img src="" alt="" />
                </Img>
                <Details>
                    <p>Produto</p>
                    <p>Quantidade</p>
                    <p>Preço</p>
                </Details>
            </StyledProduct>
            <button>-</button>
        </ContainerProductCart>
    )
}