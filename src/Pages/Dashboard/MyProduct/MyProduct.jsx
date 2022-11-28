import { useQuery } from '@tanstack/react-query';
import { data } from 'autoprefixer';
import React from 'react';
import MyProducts from './MyProducts';

const MyProduct = () => {
    const { data: products = [], isLoading } = useQuery({
        queryKey: ['product'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/products');
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className='grid gap-6 mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                products?.map(product => <MyProducts
                    key={product._id}
                    product={product}
                ></MyProducts>)
            }
        </div>
    );
};

export default MyProduct;