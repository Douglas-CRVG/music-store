import Header from "../components/Header/Header";
import {StyledMainHome} from "../styles/mainHome"
import styled from "styled-components"
import Recommended from "../components/Recommended/Recommended";
import Categories from "../components/Categories/Categories";

export default function Home() {
    return (
        <>
            <Header />
            <Div></Div>
            <StyledMainHome>
                <Recommended />
                <Categories />
            </StyledMainHome>
        </>
    )
}

const Div = styled.div`
    height: 40px;
    background-color: #edecec;
`;