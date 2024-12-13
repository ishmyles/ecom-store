import { Link } from "react-router-dom";

import "./Navbar.css"
import CartIcon from "../Icons/CartIcon";

export default function Navbar() {
    return (
        <header id="navbar">
            <nav>
                <ul className="nav-list">
                    <li className="nav-item"><Link to="/">Home</Link></li>
                    <li className="nav-item"><Link to="/shop">Shop</Link></li>
                    <li className="nav-item">
                    <Link to="/shop/cart"><CartIcon /></Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}