import styles from './ShoppingCart.module.css'
import appStyles from '../../../App.module.css'

import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from 'react';
import ItemCard from '../ItemCard/ItemCard';

export default function ShoppingCart() {
    const {shoppingCart, setShoppingCart} = useOutletContext(); 
    const [subtotal, setSubtotal] = useState(calcSubtotal);

    function calcSubtotal() {
        return shoppingCart.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
    }

    function removeItem (productId) {
        setShoppingCart(prevState => prevState.filter(item => item.product.id !== productId))
    }

    useEffect(() => {
        setSubtotal(shoppingCart.reduce((acc, item) => acc + (item.product.price * item.quantity), 0));
    }, [shoppingCart])

    return (
        <div className={appStyles.content}>
            <h1>Shopping Cart</h1>
            <div className={styles.container}>
                <div className={styles["cart-items"]}>
                <h2>Order Items</h2>
                {(!shoppingCart.length) ? <p className={styles["text-msg"]}>There are no items in your cart!</p> :  
                    <table className={styles["cart-table"]}>
                        <thead>
                            <tr className={styles["table-row"]}>
                                <th scope="col" className={styles["text-start"]}>Product</th>
                                <th scope="col" className={styles["text-start"]}>Quantity</th>
                                <th scope="col" className={styles["text-start"]}>Subtotal</th>
                                <th scope="col" className={styles["text-start"]}></th>
                            </tr>
                        </thead>
                        <tbody>
                            {shoppingCart.map(item => <ItemCard key={item.product.id} item={item} setShoppingCart={setShoppingCart} removeItem={removeItem} />)}
                        </tbody>
                    </table>}
                </div>
                {(shoppingCart.length) ? <div className={styles["checkout-totals"]}>
                    <h2>Order Summary</h2>
                    <table className={styles["cart-table"]}>
                        <tbody>
                            <tr>
                                <th className={styles["text-left"]}>Subtotal</th>
                                <td className={styles["text-right"]}>${subtotal.toFixed(2)}</td>
                            </tr>
                            <tr>
                                <th className={styles["text-left"]}>Shipping</th>
                                <td className={styles["text-right"]}>$9.99</td>
                            </tr>
                            <tr>
                                <th className={styles["text-left"]}>Total</th>
                                <td className={`${styles["text-right"]} ${styles["text-lg"]}`}><strong>${(subtotal + 9.99).toFixed(2)}</strong></td>
                            </tr>
                            <tr className={styles["text-grey"]}>
                                <td className={styles["text-right"]} colSpan={2}>*Included Tax ${(subtotal * 0.10).toFixed(2)}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button type="button">Checkout</button>
                </div> : null}
            </div>
        </div>

    )
}
