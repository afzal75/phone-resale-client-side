import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';
import MyProducts from './MyProducts';

const MyProduct = () => {
    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['product'],
        queryFn: async () => {
            const res = await fetch('https://y-chi-seven.vercel.app/products');
            const data = await res.json();
            return data;
        }
    });

    const handleDeleteProduct = (product) => {
        fetch(`https://y-chi-seven.vercel.app/products/${product._id}`, {
            method: 'DELETE',
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success('Product Deleted Successfully');
                }
            })
    }

    if(isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='grid gap-6 mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
            {
                products?.map(product => <MyProducts
                    key={product._id}
                    product={product}
                    handleDeleteProduct={handleDeleteProduct}
                ></MyProducts>)
            }
        </div>
    );
};

export default MyProduct;