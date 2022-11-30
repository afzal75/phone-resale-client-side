import React, { useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import Loading from '../Shared/Loading/Loading';
import SingleCategoryProducts from './SingleCategoryProducts';

const SingleCategoryProduct = () => {

    const [modalProducts, setModalProducts] = useState(null);
    const products = useLoaderData();
    const navigation = useNavigation();

    if (navigation.state === 'loading') {
        return <Loading></Loading>
    }

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