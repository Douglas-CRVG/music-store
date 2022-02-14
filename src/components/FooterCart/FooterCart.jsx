import { useNavigate } from "react-router-dom";
import { StyledFooter } from "../../styles/footerCart";

export default function FooterCart({acquired}){
    const navigate = useNavigate();

    const body = {}

    let total = 0;

    function handleCheckout(){

        //se existir token
        body.products = acquired;
        console.log(body)
        /* postBuy(body).then((response) => {
            console.log(response.data)
        }).catch (error => {
            console.log(error.response)
        })*/

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