import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCategoryProducts from './SingleCategoryProducts';

const SingleCategoryProduct = () => {
    const products = useLoaderData();
    console.log(products)
    return (
        <div className='grid gap-6 mt-8 grid-cols-1 md:grid-cols-2'>
            {
                products.map(product => <SingleCategoryProducts
                    key={product._id}
                    product={product}
                ></SingleCategoryProducts>)
            }
        </div>
    );
};

export default SingleCategoryProduct;