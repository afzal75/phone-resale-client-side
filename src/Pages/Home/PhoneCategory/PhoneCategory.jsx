import React, { useEffect, useState } from 'react';
import PhoneCategories from './PhoneCategories';

const PhoneCategory = () => {
    const [phones, setPhones] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/phoneCategory')
        .then(res => res.json())
        .then(data => setPhones(data))
    }, [])
    return (
        <div className='grid gap-6 mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                phones.map(phone => <PhoneCategories
                    key={phone._id}
                    phone={phone}
                ></PhoneCategories>)
            }
        </div>
    );
};

export default PhoneCategory;