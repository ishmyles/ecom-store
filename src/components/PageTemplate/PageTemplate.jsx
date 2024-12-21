import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

export default function PageTemplate() {
    const [shoppingCart, setShoppingCart] = useState([]);
    return (
        <>
            <Navbar shoppingCart={shoppingCart} />
            <Outlet context={{shoppingCart, setShoppingCart}} />
            <Footer />
        </>
    )
}