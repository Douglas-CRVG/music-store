import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledMainHome = styled.main`
    padding: 36px 0 25px;

    h1{
        margin-left: 25px;
    }
`;

const StyledButton = styled(Link)`
    all: unset;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #ffffff;
    box-shadow: 0 0 3px rgba(0,0,0,.3);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 10px;
    left: 10px;
`

export {
    StyledMainHome,
    StyledButton
}