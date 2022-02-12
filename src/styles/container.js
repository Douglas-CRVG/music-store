import styled from "styled-components";

const ContainerButtonsCategories = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 25px;

    button{
        all: unset;
        font-size: 16px;
    }

    span{
        font-weight: 700;
    }
`;

const ContainerCategories = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 20px;
`;

const ProductCategories = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-width: 140px;
    width: 140px;
    height: 150px;
    padding: 8px;
    border-radius: 10px;
    box-shadow: 0 0 4px rgba(0,0,0,.4);

    img{
        width: 64px;
        height: 64px;
        border-radius: 50%;
    }

    h2{
        font-size: 14px;
    }
`;

export{
    ContainerCategories,
    ProductCategories,
    ContainerButtonsCategories
}