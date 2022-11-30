import React, { useEffect, useState } from 'react';
import { useNavigation } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import PhoneCategories from './PhoneCategories';

const PhoneCategory = () => {
    const [phones, setPhones] = useState([]);
    const navigation = useNavigation();
    useEffect(() => {
        fetch('http://localhost:5000/phoneCategory')
            .then(res => res.json())
            .then(data => setPhones(data))
    }, []);
    if (navigation.state === 'loading') {
        return <Loading></Loading>
    }
    return (
        <div className='mt-8'>
            <h2 className='text-3xl text-center'>Products Category</h2>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                {
                    phones.map(phone => <PhoneCategories
                        key={phone._id}
                        phone={phone}
                    ></PhoneCategories>)
                }
            </div>
        </div>
    );
};

export default PhoneCategory;