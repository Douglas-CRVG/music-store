import ContainerRecommended from "./ContainerRecommended/ContainerRecommended";

export default function Recommended({ products }){
    return(
        <>
            <h1>Recomendados</h1>
            <ContainerRecommended products={ products } />
        </>
    )
}