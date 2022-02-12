import Header from "../components/Header/Header";
import {StyledMainHome} from "../styles/mainHome"
import styled from "styled-components"
import Recommended from "../components/Recommended/Recommended";
import Categories from "../components/Categories/Categories";
import { useEffect, useState } from "react";
import { getProducts } from "../services/api";

export default function Home() {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        getProducts().then(response => {
            setProducts(response.data)
        }).catch(error => {
            console.log("tchau")
            console.error(error.response)
        })
    }, [])
    return (
        <>
            <Header />
            <Div></Div>
            <StyledMainHome>
                <Recommended products={products.filter(product=>product.isRecommended)} />
                <Categories products={products.filter(product=>!product.isRecommended)} />
            </StyledMainHome>
        </>
    )
}

const Div = styled.div`
    height: 40px;
    background-color: #edecec;
`;