import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const MyOrders = () => {
    const { data: orders = [], isLoading } = useQuery({
        queryKey: ['order'],
        queryFn: async () => {
            const res = await fetch('https://y-chi-seven.vercel.app/bookings');
            const data = await res.json();
            return data;
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-4xl">My Orders</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Model</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Staus</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, i) => <tr key={order._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <img src={order?.img} className="w-1/3" alt="" />
                                </td>
                                <td>{order?.title}</td>
                                <td>{order?.email}</td>
                                <td>${order?.originalPrice}</td>
                                <td>
                                    {
                                        !order.paid && <Link to={`/dashboard/payment/${order._id}`}>
                                            <button className='btn btn-xs btn-danger'>PAY</button>
                                        </Link>

                                    }
                                    {
                                        order.paid && <span className='text-primary'>Paid</span>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;