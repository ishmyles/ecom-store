import HeroImg from '../HeroImg/HeroImg';
import DeliveryIcon from '../../Icons/DeliveryIcon'
import FreeShippingIcon from '../../Icons/FreeShippingIcon'
import Quality from '../../Icons/QualityIcon'
import InfoCard from '../InfoCard/InfoCard';
import ProductCard from '../ProductCard/ProductCard';

import './Home.css'

export default function Home() {
    return (
        <>
            <HeroImg />
            <div className="info-section">
                <h2>Why Shop With Us</h2>
                <div className="info-items">
                    <InfoCard subheading={"Fast Delivery"} icon={<DeliveryIcon />} description={"Your orders are sent out sent out on the same day - when placed before 4pm"} />
                    <InfoCard subheading={"Free Shipping"} icon={<FreeShippingIcon />} description={"Free shipping on orders $79 and above"} />
                    <InfoCard subheading={"Premium Quality"} icon={<Quality />} description={"Our products are the best quality guaranteed or your money back*"} />
                </div>
            </div>
            <div className="products-section">
                <h2>Our Products</h2>
                <div className="product-items">
                    <div>
                        <ProductCard category={"Men's Clothing"} cardColor={"#7a516c"} />
                        <ProductCard category={"Women's Clothing"} cardColor={"#fcac34"} />
                    </div>
                    <div>
                        <ProductCard category={"Accessories"} cardColor={"#fdc849"} />
                        <ProductCard category={"Electronics"} cardColor={"#c74d70"} />
                    </div>
                </div>
            </div>
        </>
    );
}