import { useNavigate } from "react-router-dom";
import { StyledFooter } from "../../styles/footerCart";

export default function FooterCart({acquired}){
    const navigate = useNavigate();

    const body = {}

    let total = 0;

    function handleCheckout(){
        body.products = acquired;
        console.log(body)
        localStorage.setItem('cart', JSON.stringify([]));
        console.log("LS", JSON.parse(localStorage.getItem('cart')))
        navigate("/success", { replace: true })
    }

    if(acquired.length > 0){
        acquired.map(product => {
            total += Number(product?.price);
        })
    }

    return(
        <StyledFooter>
            <div>
                <p>Total</p>
                <p>R$ {Number(total).toFixed(2).replace('.', ',')}</p>
            </div>
            <button onClick={handleCheckout} >Confirmar</button>
        </StyledFooter>
    )
}