import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';

const AllSeller = () => {
    const { data: sellers = [], refetch, isLoading } = useQuery({
        queryKey: ['seller'],
        queryFn: async () => {
            const res = await fetch('https://y-chi-seven.vercel.app/sellers');
            const data = await res.json();
            return data;
        }
    });

    const handleMakeVerifySeller = (id) => {
        fetch(`https://y-chi-seven.vercel.app/users/seller/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast('Seller Verified')
                    refetch();
                }
            })
    }

    const handleDeleteSeller = (seller) => {
        fetch(`https://y-chi-seven.vercel.app/seller/${seller._id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Seller ${seller.displayName} Deleted Successfully`);
                }
            })
    }

    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-4xl">All Seller</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Verified Seller</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers.map((seller, i) => <tr key={seller._id}>
                                <th>{i + 1}</th>
                                <td>{seller?.displayName}</td>
                                <td>{seller?.email}</td>
                                <td>{seller?.role}</td>
                                <td>
                                    {
                                        seller?.verify !== 'verified' ? <button onClick={() => handleMakeVerifySeller(seller._id)} className='btn btn-xs btn-primary'>Verify Seller</button>
                                            :
                                            <button className='btn btn-xs bg-green-600 text-black borde-0'>Verified</button>
                                    }


                                </td>
                                <td><button onClick={() => handleDeleteSeller(seller)} className='btn btn-xs btn-danger'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSeller;