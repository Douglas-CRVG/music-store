import styled from "styled-components";

const ContainerProductCart = styled.div`
    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button{
        all: unset;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background-color: #ffffff;
        font-size: 30px;
        display: flex;
        align-items:center;
        justify-content:center;
    }
`

const StyledProduct = styled.div`
    display: flex;
    gap: 16px;
`

const Img = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    width: 64px;
    height: 64px;
    background-color:green;
    border-radius: 10px;

    img{
        width: 45px;
        height: 45px;
        border-radius: 50%;
    }
`

const Details = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`

export{
    Details,
    ContainerProductCart,
    StyledProduct,
    Img
}