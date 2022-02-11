import { useState } from "react";
import { ContainerButtonsCategories } from "../../styles/container";
import Container from "./Container/Container";

export default function Categories({ products }){
    const [categorie, setCategorie] = useState("Todos");
    let newProducts=[];
    function addProduct(arr, newArr){
        newProducts.push(products[0]);
        newProducts.push(products[1]);
        newProducts.push(products[2]);
    }

    if(categorie === "Todos"){
        newProducts = [...products];
    } else if (categorie === "Mais procurados"){
        products.sort((a, b)=>Number(b.views) - Number(a.views));
        addProduct(products, newProducts);
    } else{
        products.sort((a, b)=>Number(a.price) - Number(b.price));
        addProduct(products, newProducts);
    }

    return(
        <>
            <ContainerButtonsCategories>
                <button onClick={()=>{ setCategorie("Todos")}}>{categorie !== "Todos"? "Todos":<span>Todos</span>}</button>
                <button onClick={()=>{ setCategorie("Mais procurados")}}>{categorie !== "Mais procurados"? "Mais procurados":<span>Mais procurados</span>}</button>
                <button onClick={()=>{ setCategorie("Menores preços")}}>{categorie !== "Menores preços"? "Menores preços":<span>Menores preços</span>}</button>
            </ContainerButtonsCategories>
            <Container products = { newProducts } />
        </>
    )
}