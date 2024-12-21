import styles from './ItemCard.module.css'

export default function ItemCard({item, setShoppingCart, removeItem}) {
    return (
    <tr className={styles["item-row"]}>
        <td className={styles["table-cell"]} style={{display: "flex", alignItems: "center", gap: "20px"}} scope="row">
            <img className={styles["product-img"]} src={item.product.image} width={70} alt="" />
            <div>
                <p><strong>{item.product.title}</strong></p>
                <p className={`${styles["text-grey"]} ${styles["text-capitalise"]}`}>{item.product.category}</p>
                <p className={styles["text-grey"]}>${item.product.price}</p>
            </div>
        </td>
        <td className={styles["table-cell"]} style={{maxWidth: "80px"}} >
            <input type="number" min={1} name="item-quantity" id="item-quantity" value={item.quantity} style={{height: "40px", width: "100%", textAlign: "center"}} 
            onChange={(e) => {
                setShoppingCart(prevState => {
                    return prevState.map(prev => (prev.product.id === item.product.id) ? {...prev, quantity: +e.target.value} : {...prev})
                })
            }} />
        </td>
        <td className={`${styles["table-cell"]} ${styles["text-center"]}`} ><strong>${(item.product.price * item.quantity).toFixed(2)}</strong></td>
        <td><svg width={20} onClick={() => removeItem(item.product.id)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Delete Item</title><path d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z" /></svg></td>
    </tr>)
}