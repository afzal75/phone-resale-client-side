import React from 'react';
import Banner from '../Banner/Banner';
import Featured from '../Featured/Featured';
import PhoneCategory from '../PhoneCategory/PhoneCategory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PhoneCategory></PhoneCategory>
            <Featured></Featured>
        </div>
    );
};

export default Home;