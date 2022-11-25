import React from 'react';

const BookingModal = ({ product }) => {
    const { title } = product
    const date = new Date();
    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const originalPrice = form.originalPrice.value;
        const resalePrice = form.resalePrice.value;
        const sellerName = form.sellerName.value;


        const booking = {
            date,
            itemName: title,
            email,
            phone,
            location,
            originalPrice,
            resalePrice,
            sellerName: sellerName
        }
        
        console.log(booking);
        product(null)
    }





    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    {/* <h3 className="text-lg font-bold">Name</h3> */}
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled defaultValue={date} className="input w-full input-bordered" />
                        <input name='sellerName' type="text" placeholder="Seller Name" className="input w-full input-bordered" />
                        <input name='title' type="text" placeholder="title" defaultValue={title} className="input w-full input-bordered" />
                        <input name='email' type="text" placeholder="Email Address" className="input w-full input-bordered" />
                        <input name='originalPrice' type="text" placeholder="Original Price" className="input w-full input-bordered" />
                        <input name='resalePrice' type="text" placeholder="Resale Price" className="input w-full input-bordered" />
                        <input name='useProduct' type="text" placeholder="Use Product" className="input w-full input-bordered" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <input name='location' type="text" placeholder="Location" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-accent w-full ' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;