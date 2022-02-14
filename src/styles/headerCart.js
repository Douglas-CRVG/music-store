import styled from "styled-components";

const StyledHeader = styled.header`
    width: 100%;
    height: 80px;
    padding: 0 24px;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 0 0 4px rgba(0,0,0,.4);
    background-color: beige;

    h1{
        margin: 0 auto;
        font-size: 24px;
        line-height: 32px;
        font-weight: 700;
    }

    button{
        all: unset;
        position: absolute;
        padding: 8px;
        font-size:12px;
        line-height: 16px;
        border-radius: 20px;
        background-color: #ffffff;
    }
`;

export{
    StyledHeader
}