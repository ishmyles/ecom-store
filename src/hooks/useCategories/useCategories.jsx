import { useEffect, useState } from 'react'

export default function useCategories() {
    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        const fetchProductCategories = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products/categories');
                const categories = await response.json();
                setCategoryList(["all", ...categories]);
            } catch {
                const categories = ["electronics","jewelery","men's clothing","women's clothing"];
                setCategoryList(["all", ...categories]);
            }
        }
    
        !categoryList.length && fetchProductCategories();
    });

    return { categoryList };
}