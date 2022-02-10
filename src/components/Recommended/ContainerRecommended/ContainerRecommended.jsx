import { StyledContainer } from "../../../styles/containerProducts";
import Product from "./Product/Product";

export default function ContainerRecommended(){
    return (
        <>
            <StyledContainer>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </StyledContainer>
        </>
    )
}