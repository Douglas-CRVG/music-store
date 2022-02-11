import { StyledContainer } from "../../../styles/containerProducts";
import Product from "./Product/Product";

export default function ContainerRecommended({ products}){
    return (
        <>
            <StyledContainer>
                {products.map((product, index) => <Product key={index} {...product} />)}
            </StyledContainer>
        </>
    )
}