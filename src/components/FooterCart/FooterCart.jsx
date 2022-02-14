import { useNavigate } from "react-router-dom";
import { StyledFooter } from "../../styles/footerCart";

export default function FooterCart(){
    const navigate = useNavigate();

    function handleCheckout(){
        navigate("/success", { replace: true })
    }
    return(
        <StyledFooter>
            <div>
                <p>Total</p>
                <p>R$ 0,00</p>
            </div>
            <button onClick={handleCheckout} >Confirmar</button>
        </StyledFooter>
    )
}