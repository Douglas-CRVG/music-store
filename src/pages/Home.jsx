import Header from "../components/Header/Header";
import {StyledButton, StyledMainHome} from "../styles/mainHome";
import Recommended from "../components/Recommended/Recommended";
import Categories from "../components/Categories/Categories";
import { useEffect, useState } from "react";
import {services} from "../services/services.js";
import { PersonSharp } from 'react-ionicons'

export default function Home() {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        services.getProducts().then(response => {
            setProducts(response.data)
        }).catch(error => {
            console.error(error.response)
        })
    }, [])

    return (
        <>
            <Header />
            <StyledMainHome>
                <Recommended products={products.filter(product=>product.isRecommended)} />
                <Categories products={products.filter(product=>!product.isRecommended)} />
                <StyledButton to={"/signin"}>
                    <PersonSharp
                        color={'#00000'}
                        height="30px"
                        width="30px"
                    />
                </StyledButton>
            </StyledMainHome>
        </>
    )
}