import { useNavigate } from "react-router-dom";
import { toastError } from "../../components/toasts.jsx";
import { StyledFooter } from "../../styles/footerCart";
import { services } from "../../services/services.js"

export default function FooterCart({acquired}){
    const navigate = useNavigate();

    const body = {}

    let total = 0;

    function handleCheckout(){
        const token = JSON.parse(localStorage.getItem('auth'));

        if (!token){
            return navigate("/signin", { replace: true })
        }

        if(acquired.length === 0){
            toastError('Carrinho vazio! Adicione ao menos 1 produto.')
            return navigate('/', {replace: true})
        }

        body.products = acquired;
        services.postCart(body, token).then((response)=>{
            console.log(response)
            localStorage.setItem('cart', JSON.stringify([]));
            navigate("/success", { replace: true })
        }).catch((error)=>{
            console.log(error.response)
        })
        
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