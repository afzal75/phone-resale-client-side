import React from 'react';

const SingleCategoryProducts = ({ product, setModalProducts }) => {
    const { title, img, location, resalePrice, originalPrice, useProduct } = product;
    return (
        <div className="shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="" className="rounded-xl w-2/3 m-auto" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{location}</p>
                <p>Price: $ {originalPrice}</p>
                <p>Resale Price: $ {resalePrice}</p>
                <p>Use: {useProduct}</p>
                <div className="card-actions">
                    <label onClick={() => setModalProducts(product)} htmlFor="booking-modal" className="btn btn-primary">Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default SingleCategoryProducts;