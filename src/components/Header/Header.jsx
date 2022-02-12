import { StyledHeader } from "../../styles/header";
import IconCart from "./cart/IconCart";

export default function Header({name}) {
    name = "cleytin";
    return(
        <StyledHeader>
            <h1>Seja bem-vinda(o){name && `, ${name}`}! </h1>
            <IconCart />
        </StyledHeader>
    )
}