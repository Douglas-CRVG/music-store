import { useNavigate } from "react-router-dom"

export default function Success() {
    const navigate = useNavigate();

    function forHome(){
        navigate("/", {replace: true})
    }
    return (
        <main>
            <div></div>
            <div>
                <h1>Pedido confirmado</h1>
                <p>Seu pedido foi recebido e está sendo atendido</p>
            </div>
            <button onClick={forHome} > Ir para o início</button>
        </main>
    )
}