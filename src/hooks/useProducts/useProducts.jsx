import { useEffect, useState } from 'react'

export default function useProducts(selectedCategory) {
    const [productList, setProductList] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const productsUrl = (selectedCategory !== "all") ? `https://fakestoreapi.com/products/category/${selectedCategory}` : 'https://fakestoreapi.com/products/';
        
        const controller = new AbortController();
        const signal = controller.signal

        const fetchProducts = async () => {
            try {
                setLoading(true)
                const response = await fetch(productsUrl, {signal});
                const products = await response.json();

                setProductList(products);
            } catch (e) {
                if (e.name === 'AbortError') {
                    console.log('Aborted GET Request');
                    return;
                }
                setError(e.message);
            } finally {
                setLoading(false);
            }
        }

        fetchProducts();

        return () => controller.abort();
      }, [selectedCategory])

      return { productList, setProductList, error, loading }; 
}