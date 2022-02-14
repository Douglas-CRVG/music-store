import { ProductCategories } from "../../../styles/container"
import { Price } from "../../../styles/product"
import { Link } from "react-router-dom";
import styled from "styled-components"

export default function Product({_id, image, price, name}){

    return (
        <StyledLink to={`/product/${_id}`}>
            <ProductCategories>
                <img src={image} alt={name} />
                <h2>{name}</h2>
                <Price>
                    <p>R$ {Number(price).toFixed(2).replace(".", ",")}</p>
                </Price>
            </ProductCategories>
        </StyledLink>
    )
}

const StyledLink = styled(Link)`
    all: unset;
`