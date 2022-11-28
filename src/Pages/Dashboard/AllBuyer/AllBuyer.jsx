import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllBuyer = () => {
    const { data: buyers = [], } = useQuery({
        queryKey: ['buyer'],
        queryFn: async () => {
            const res = await fetch('');
            const data = res.json();
            return data;
        }
    });
    return (
        <div>
            <h2 className="text-3xl">All Buyer</h2>
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
                                users.map((user, i) => <tr key={user._id}>
                                    <th>{i + 1}</th>
                                    <td>{user?.displayName}</td>
                                    <td>{user?.email}</td>
                                    <td>{user?.role}</td>
                                    {/* <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td> */}
                                    <td><button className='btn btn-xs btn-danger'>Delete</button></td>
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