import React from 'react';
import { useLoaderData } from 'react-router-dom';
// import BookingModal from '../BookingModal/BookingModal';
import SingleCategoryProducts from './SingleCategoryProducts';

const SingleCategoryProduct = () => {
    const products = useLoaderData();
    console.log(products)
    return (
        <section>
            <div className='grid gap-6 mt-8 grid-cols-1 md:grid-cols-2'>
                {
                    products.map(product => <SingleCategoryProducts
                        key={product._id}
                        product={product}
                    ></SingleCategoryProducts>)
                }
            </div>
            {/* <BookingModal
                product={product}
            ></BookingModal> */}
        </section>
    );
};

export default SingleCategoryProduct;