import styled from "styled-components";

const StyledProduct = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 25px;
    gap: 13px;
    min-width: 152px;
    padding: 16px;
    border-radius: 15px;
    box-shadow: 0 0 4px rgba(0,0,0,.4);

    img{
        width: 80px;
        height: 80px;
    }

    h2{
        font-size: 16px;
    }
`;

const Price = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 14px;
`;

export {
    StyledProduct,
    Price,
}