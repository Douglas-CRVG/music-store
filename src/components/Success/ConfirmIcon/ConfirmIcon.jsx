import { CheckmarkCircle } from 'react-ionicons';
import { StyledConfirmIcon } from '../../../styles/success';

export default function ConfirmIcon(){
    return(
        <StyledConfirmIcon>
            <CheckmarkCircle
                color={'#32ba7c'} 
                title={'Pedido Confirmado'}
                height="108px"
                width="108px"
            />
        </StyledConfirmIcon>
    )
}