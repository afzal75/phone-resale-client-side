import React from 'react';
import samsung from '../../../assets/images/samsung.jpeg'
import applepro from '../../../assets/images/applepro.jpg'

const Featured = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='relative w-3/4'>
                    <img src={applepro} alt="" className="w-2/3 h-full rounded-lg shadow-2xl" />
                    <img src={samsung} alt="" className="absolute w-1/3 right-5 top-1/3 border-8 rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2'>
                    <h1 className="my-2 text-center text-3xl font-bold">FEATURED</h1>
                    <p className="py-6">A mobile phone is a wireless handheld device that allows users to make and receive calls. While the earliest generation of mobile phones could only make and receive calls, today's mobile phones do a lot more, accommodating web browsers, games, cameras, video players and navigational systems.A mobile phone is a wireless handheld device that allows users to make and receive calls. While the earliest generation of mobile phones could only make and receive calls, today's mobile phones do a lot more, accommodating web browsers, games, cameras, video players and navigational systems..</p>
                    <button className="btn btn-primary">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;