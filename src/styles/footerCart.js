import styled from "styled-components";

const StyledFooter = styled.footer`
    width: 100%;
    height: 80px;
    padding: 0 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;
    background-color: #e9dfdf;

    div{
        height: 56px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        p:nth-child(1){
            font-size: 16px;
            font-weight: 300;
        }

        p:nth-child(2){
            font-size: 24px;
            font-weight: 700;
        }
    }
    
    button{
        all: unset;
        width: 200px;
        height: 56px;
        border-radius: 10px;
        text-align: center;
        font-size: 20px;
        font-weight: 700;
        background-color: #ffffff;
    }
`

export{
    StyledFooter
}