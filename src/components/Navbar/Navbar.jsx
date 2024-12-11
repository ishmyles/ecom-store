import "./Navbar.css"

import ShoppingCart from "../ShoppingCart/ShoppingCart";

export default function Navbar() {
    return (
        <header id="navbar">
            <nav>
                <ul className="nav-list">
                    <li className="nav-item">Home</li>
                    <li className="nav-item">Shop</li>
                    <li className="nav-item">
                        <ShoppingCart />
                    </li>
                </ul>
            </nav>
        </header>
    );
}