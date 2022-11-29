import React from 'react';
import { Link } from 'react-router-dom';

const PhoneCategories = ({ phone }) => {
    const {brandName,  title, img } = phone;
    return (
        <div className="shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img}  alt="Shoes" className="rounded-xl w-2/3 m-auto" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                    <Link to={`products/${brandName}`}>
                        <button className="btn btn-primary">Buy Now</button>
                    </Link> 
                </div>
            </div>
        </div>
    );
};

export default PhoneCategories;