import FooterCart from "../components/FooterCart/FooterCart";
import HeaderCart from "../components/HeaderCart/HeaderCart";
import MainCart from "../components/MainCart/MainCart";

export default function Cart() {
    const acquired = JSON.parse(localStorage.getItem('cart'));
    return (
        <>
            <HeaderCart />
            <MainCart acquired={acquired} />
            <FooterCart acquired={acquired} />
        </>
    )
}