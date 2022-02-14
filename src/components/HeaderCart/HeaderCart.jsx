import { useNavigate } from "react-router-dom";
import { StyledHeader } from "../../styles/headerCart";

export default function HeaderCart(){
    const navigate = useNavigate();
    return(
        <StyledHeader>
            <button onClick={() => navigate("/", { replace: true })}>Voltar</button>
            <h1>Carrinho</h1>
        </StyledHeader>
    )
}