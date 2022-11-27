import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import SingleCategoryProducts from './SingleCategoryProducts';

const SingleCategoryProduct = () => {

    const [modalProducts, setModalProducts] = useState(null);
    const products = useLoaderData();
    // console.log(products);

    return (
        <section>
            <div className='grid gap-6 mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map(product => <SingleCategoryProducts
                        key={product._id}
                        product={product}
                        setModalProducts={setModalProducts}
                    ></SingleCategoryProducts>)
                } 
                
            </div>
            {
                modalProducts &&
                <BookingModal
                modalProducts={modalProducts}
                setModalProducts={setModalProducts}
            ></BookingModal>}
        </section>
    );
};

export default SingleCategoryProduct;