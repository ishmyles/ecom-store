import './ProductCard.css'

export default function ProductCard({category, cardColor}) {
    return (
        <div className='product-item' style={{backgroundColor: cardColor}}>
            <h3>{category}</h3>
        </div>
    )
}