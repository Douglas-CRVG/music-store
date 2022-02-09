import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart, Home, Product, Success, SignIn, SignUp } from "../pages";
import "../styles/reset.css";

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/success" element={<Success />} />
                <Route path="/signIn" element={<SignIn />} />
                <Route path="/signUp" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    )
}