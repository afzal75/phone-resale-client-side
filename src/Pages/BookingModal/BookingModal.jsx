import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from './../../contexts/AuthProvider';

const BookingModal = ({ modalProducts, setModalProducts }) => {
    console.log(modalProducts);
    const { user } = useContext(AuthContext);
    const { title, originalPrice, location } = modalProducts;
    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const title = form.title.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const originalPrice = form.originalPrice.value;
        // const resalePrice = form.resalePrice.value;
        // const sellerName = form.sellerName.value;


        const booking = {
            // date,
            name,
            title,
            email,
            phone,
            location,
            // price,
            originalPrice,
            // resalePrice,
            // sellerName: sellerName
        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                
                if (data.acknowledged) {
                    console.log(data);
                    setModalProducts(null)
                    toast.success('Booking Confirmed');
                }

            })
    }
    return (
        <>
            {<div>
                <input type="checkbox" id="booking-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg font-bold">{title}</h3>
                        <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                            {/* <input type="text" disabled defaultValue={date} className="input w-full input-bordered" /> */}
                            {/* <input name='sellerName' type="text" placeholder="Seller Name" className="input w-full input-bordered" /> */}
                            <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="User Name" className="input w-full input-bordered" />
                            <input name='title' type="text" defaultValue={title} disabled placeholder="title" className="input w-full input-bordered" />
                            <input name='email' type="text" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                            <input name='originalPrice' type="text" disabled placeholder="Original Price" defaultValue={originalPrice} className="input w-full input-bordered" />
                            {/*<input name='resalePrice' type="text" placeholder="Resale Price" className="input w-full input-bordered" />
                    <input name='useProduct' type="text" placeholder="Use Product" className="input w-full input-bordered" /> */}
                            <input name='phone' type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                            <input name='location' type="text" placeholder="Location" defaultValue={location} className="input w-full input-bordered" />
                            <br />
                            <input className='btn btn-accent w-full ' type="submit" value="Submit" />
                        </form>
                    </div>
                </div>

            </div>
            }


        </>
    );
};

export default BookingModal;