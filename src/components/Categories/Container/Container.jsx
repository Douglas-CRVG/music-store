import { ContainerCategories } from "../../../styles/container";
import Product from "./Product";

export default function Container({ products}){
    return(
        <ContainerCategories>
            {products.map((product, index) => <Product key={index} {...product} />)}
        </ContainerCategories>
    )
}