import { Link } from "react-router-dom";
import { Price, StyledProduct } from "../../../../styles/product";
import styled from "styled-components"

export default function Product({_id, image, price, name}){
    return (
        <StyledLink to={`/product/${_id}`}>
            <StyledProduct>
                <img src={image} alt={name} />
                <h2>{name}</h2>
                <Price>
                    <p>R$ {Number(price).toFixed(2).replace(".", ",")}</p>
                </Price>
            </StyledProduct>
        </StyledLink>
    )
}

const StyledLink = styled(Link)`
    all: unset;
`