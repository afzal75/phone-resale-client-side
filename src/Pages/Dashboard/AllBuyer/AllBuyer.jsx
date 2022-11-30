import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';

const AllBuyer = () => {
    const { data: buyers = [], isLoading, refetch } = useQuery({
        queryKey: ['buyer'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/buyers');
            const data = await res.json();
            return data;
        }
    });

    const handleDeleteBuyer = (buyer) => {
        fetch(`http://localhost:5000/buyer/${buyer._id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Buyer ${buyer.displayName} Deleted Successfully`);
                }
            })
    }

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
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
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                buyers.map((buyer, i) => <tr key={buyer._id}>
                                    <th>{i + 1}</th>
                                    <td>{buyer?.displayName}</td>
                                    <td>{buyer?.email}</td>
                                    <td>{buyer?.role}</td>
                                    <td><button onClick={() => handleDeleteBuyer(buyer)} className='btn btn-xs btn-danger'>Delete</button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllBuyer;