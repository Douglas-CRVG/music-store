import { useNavigate } from "react-router-dom"
import ConfirmIcon from "../components/Success/ConfirmIcon/ConfirmIcon";
import ConfirmText from "../components/Success/ConfirmText/ConfirmText";
import { MainSuccess } from "../styles/success";

export default function Success() {
    const navigate = useNavigate();

    function forHome(){
        navigate("/", {replace: true})
    }
    return (
        <MainSuccess>
            <ConfirmIcon />
            <ConfirmText />
            <button onClick={forHome} > Continuar comprando</button>
        </MainSuccess>
    )
}