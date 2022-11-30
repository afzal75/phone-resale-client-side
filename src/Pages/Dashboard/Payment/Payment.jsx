import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);

const Payment = () => {
    const booking = useLoaderData();
    const { title, originalPrice, date } = booking;
    console.log(booking);
    return (
        <div>
            <h2 className="text-3xl">Payment</h2>
            <h3 className='text-xl'>Payment for product {title}</h3>
            <p className='text-xl'>Please Pay <strong>${originalPrice}</strong> for your date {date}</p>
            <div className='w-96 my-14'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;