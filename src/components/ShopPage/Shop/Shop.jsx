import { useState } from 'react';
import useCategories from '../../../hooks/useCategories/useCategories';
import useProducts from '../../../hooks/useProducts/useProducts';
import { useOutletContext } from "react-router-dom";

import SelectInput from '../SelectInput/SelectInput';
import ProductCard from '../ProductCard/ProductCard';

import styles from './Shop.module.css'
import appStyles from '../../../App.module.css'

const sortingOptions = {
  options: ["Relevance" ,"Price (ascending)", "Price (descending)", "Rating (ascending)", "Rating (descending"],
  values: ["relevance", "priceAsc", "priceDesc", "ratingAsc", "ratingDesc"]
};

function Shop() {
  const {shoppingCart, setShoppingCart} = useOutletContext(); 
  const [ category, setCategory ] = useState('all');
  const { categoryList } = useCategories();
  const { productList, setProductList, error, loading} = useProducts(category);

  const changeCategory = (selectedCategory) => setCategory(selectedCategory);

  const sortProducts = (sortType) => {
    if (sortType === "priceAsc") {
      setProductList(prevList => [...prevList.sort((a, b) => a.price - b.price)]);
    } else if (sortType === "priceDesc") {
      setProductList(prevList => [...prevList.sort((a, b) => b.price - a.price)]);
    } else if (sortType === "ratingAsc") {
      setProductList(prevList => [...prevList.sort((a, b) => a.rating.rate - b.rating.rate)]);
    } else if (sortType === "ratingDesc") {
      setProductList(prevList => [...prevList.sort((a, b) => b.rating.rate - a.rating.rate)]);
    } else {
      setProductList(prevList => [...prevList.sort((a, b) => a.id - b.id)]);
    }
  }

  const addToCart = (product) => {
    if (!shoppingCart.length) {
      setShoppingCart([{product: product, quantity: 1}]);
      return;
    }

    const index = shoppingCart.findIndex(item => item.product.id === product.id);
    if (index !== -1) { 
      const newList = [...shoppingCart];
      newList[index].quantity = newList[index].quantity + 1;
      setShoppingCart(newList);
    } else {
      setShoppingCart(prevState => [...prevState, {product, quantity: 1}]);
    }
  }

  return (
    <div className={appStyles.content}>
      <h1>Products</h1>
      <aside>
        <SelectInput id={"selected-category"} label={"Filter by"} values={categoryList} options={categoryList} onChangeFunc={changeCategory}  />
        <SelectInput id={"sorted-order"} label={"Sort by"} values={sortingOptions.values} options={sortingOptions.options} onChangeFunc={sortProducts}  />
      </aside>
      <div className={styles.products}>
        {loading && <div className={styles["page-msg"]}><p>Loading...</p></div>}
        {error && 
          <div className={styles["page-msg"]}>
            <p><strong>Uh oh!</strong></p>
            <p>There was an issue trying to get your products.</p>
            <p>Please try again later.</p>
          </div>}
        {!loading && productList.map(item => (
          <ProductCard key={item.id} id={item.id} title={item.title} category={item.category} rating={item.rating} price={item.price} image={item.image} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Shop
