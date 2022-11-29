import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
// import { useLoaderData } from 'react-router-dom';


const AddProduct = () => {
    // console.log(phone);
    const date = new Date();
    const navigate = useNavigate()
    const { data: categories, isLoading } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categoryItem');
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return
    }

    const handleAddProduct = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const title = form.title.value;
        const email = form.email.value;
        const img = form.img.value;
        const useProduct = form.useProduct.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const description = form.description.value;
        const originalPrice = form.originalPrice.value;
        const resalePrice = form.resalePrice.value;
        const brandName = form.brandName.value;


        const product = {
            date,
            name,
            title,
            email,
            img,
            useProduct,
            phone,
            location,
            description,
            originalPrice,
            resalePrice,
            brandName
        }
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                navigate('/dashboard/myproduct')
                toast.success('Product Added Successfully');
                
            })
    }

    return (
        <div className='w-1/2'>
            <h2 className="text-4xl">Add A Doctor</h2>
            <form onSubmit={handleAddProduct} className='grid grid-cols-1 gap-3 mt-10'>
                <input type="text" disabled defaultValue={date} className="input w-full input-bordered" />
                {/* <input name='sellerName' type="text" placeholder="Seller Name" className="input w-full input-bordered" /> */}
                <input name='name' type="text" placeholder="User Name" className="input w-full input-bordered" />
                <input name='title' type="text" placeholder="Title" className="input w-full input-bordered" />
                <input name='email' type="text" placeholder="Email Address" className="input w-full input-bordered" />
                <input name='img' type="text" placeholder="IMAGE" className="input w-full input-bordered" />
                <input name='useProduct' type="text" placeholder="Use Product" className="input w-full input-bordered" />
                <input name='originalPrice' type="text" placeholder="Original Price" className="input w-full input-bordered" />
                <input name='resalePrice' type="text" placeholder="Resale Price" className="input w-full input-bordered" />
                <input name='phone' type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                <input name='description' type="text" placeholder="Description" className="input w-full input-bordered" />
                <input name='location' type="text" placeholder="Location" className="input w-full input-bordered" />
                <select name='brandName' className="select select-bordered w-full max-w-xs">
                    {
                        categories.map(category => <option
                            key={category._id}
                            value={category.brandName}
                        >{category.brandName}</option>)
                    }

                </select>
                <br />
                <button>
                    <input className='btn btn-accent w-full ' type="" value="Add Product" />
                </button>
            </form>
        </div>
    );
};

export default AddProduct;