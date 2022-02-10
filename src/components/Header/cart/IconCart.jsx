import { CartOutline } from 'react-ionicons';
import { useNavigate } from 'react-router-dom';
import { StyledIconCart } from '../../../styles/iconCart';

export default function IconCart(){

    const navigate = useNavigate();
    return (
        <StyledIconCart onClick={() => navigate("/cart", { replace: true })} >
            <CartOutline
                color={'#00000'} 
                title={"carrinho"}
                height="28px"
                width="28px"
            />
        </StyledIconCart>
    )
}