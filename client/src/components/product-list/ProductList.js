import React, { useEffect, useState } from 'react';
import ProductCard from '../product-card/ProductCard';
import axios from 'axios';

const ProductList = () => {
    
    const [products, getProducts] = useState('');
    const [categories, getCategories] = useState('');

    const url = 'http://localhost:3004'; // change url when deploying
    const productURL = url + '/api/products';
    const categoryURL = url + '/api/types';

    let props = [];

    useEffect(() => {
        getAllProducts();
        getAllCategories();
    }, []);

    const getAllProducts = () => {
        axios.get(productURL)
        .then ((response) => {
            const products = response.data;
            getProducts(products);
            console.log('products', products);
            console.log('products[0].name', products[0].name);
            /* props.push(products); */
        })
        .catch(error => console.error(`Error: ${error}`));
    }

    const getAllCategories = () => {
        axios.get(categoryURL)
        .then ((response) => {
            const categories = response.data;
            getCategories(categories);
            console.log('categories', categories);
            console.log('categories[0].name', categories[0].name);
            /* props.push(categories);
            console.log('props', props); */
        })
        .catch(error => console.error(`Error: ${error}`));
    }
    const productKeys = Object.values(products);
    console.log("Type of productKeys", typeof(productKeys));
    console.log("productKeys", productKeys);
    const addedTodayProducts = productKeys.map( productData => 
         
        <ProductCard {...productData} /> );
     


    return (
        <div>
          {addedTodayProducts}  
        </div>
    );
}

export default ProductList;