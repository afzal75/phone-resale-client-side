import React from 'react';

const MyProducts = ({ product, handleDeleteProduct }) => {
    const { title, img } = product;


    
    return (
        <div className="card shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="" className="rounded-xl w-2/3" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="flex">
                    <div>
                        <button className="btn btn-primary mr-4">Buy Now</button>
                    </div>
                    <div>
                        <button onClick={() => handleDeleteProduct(product)} className="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProducts;