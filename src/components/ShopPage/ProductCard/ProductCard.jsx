import styles from './ProductCard.module.css'

export default function ProductCard({ id, title, category, rating, price, image, addToCart}) {
    const product = {id, title, category, price, image};
    return (
        <div className={styles["product-card"]}> {/* 'product-item-card' */}
            <div className={styles["img-container"]}>
              <img src={image} alt="" />
            </div>
            <h2>{title}</h2>
            <p className={styles["item-rating"]}>⭐ {rating.rate} ({rating.count})</p>
            <p className={styles["item-price"]}><strong>${price}</strong></p>
            <button className={styles["btn-buy"]} type="button" onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
}