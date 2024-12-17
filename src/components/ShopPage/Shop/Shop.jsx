import { useState } from 'react'
import useCategories from '../../../hooks/useCategories/useCategories';
import useProducts from '../../../hooks/useProducts/useProducts';
import SelectInput from '../SelectInput/SelectInput';
import ProductCard from '../ProductCard/ProductCard';

import styles from './Shop.module.css'

const sortingOptions = {
  options: ["Relevance" ,"Price (ascending)", "Price (descending)", "Rating (ascending)", "Rating (descending"],
  values: ["relevance", "priceAsc", "priceDesc", "ratingAsc", "ratingDesc"]
};

function Shop() {
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

  return (
    <div className={styles.content}>
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
        {productList.map(item => (
          <ProductCard key={item.id} id={item.id} title={item.title} rating={item.rating} price={item.price} image={item.image} />
        ))}
      </div>
    </div>
  );
}

export default Shop
