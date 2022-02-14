import styled from "styled-components";

const MainSuccess = styled.main`
    height: 100vh;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;

    button{
        width: 208px;
        padding: 16px 0;
        border: none;
        border-radius: 10px;
        font-size: 16px;
        font-weight: 500;
    }
`

const StyledConfirmIcon = styled.div`
    width: 164px;
    height: 164px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #E0FFE5;
    border-radius: 50%;
`
const StyledConfirmText = styled.div`
    text-align: center;

    h1{
        font-size: 32px;
        line-height: 48px;
    }

    p{
        font-size: 16px;
        font-weight: 300;
        line-height: 24px;
    }
`

export{
    MainSuccess,
    StyledConfirmIcon,
    StyledConfirmText
}