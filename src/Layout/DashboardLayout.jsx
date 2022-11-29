// import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from './../Pages/Shared/Navbar/Navbar';
import useAdmin from './../hooks/useAdmin';
import { AuthContext } from '../contexts/AuthProvider';
import { useContext } from 'react';
import useSeller from '../hooks/useSeller';
import useBuyer from '../hooks/useBuyer';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    const [isBuyer] = useBuyer(user?.email);
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        <li><Link to="/dashboard">Dashboard</Link></li>

                        {
                            isBuyer && <>
                                <li><Link to="/dashboard/myorders">My Order</Link></li>
                            </>

                        }
                        {
                            isSeller &&
                            <>
                                <li><Link to="/dashboard/addproduct">Add Product</Link></li>
                                <li><Link to="/dashboard/myproduct">My Product</Link></li>
                            </>
                        }
                        {/* {
                            isAdmin === 'buyer' &&
                            <>
                                <li><Link to="/dashboard/myorders">My Order</Link></li>
                            </>
                        } */}

                        {/* {
                            isAdmin === 'seller' &&
                            <>
                                <li><Link to="/dashboard/addproduct">Add Product</Link></li>
                                <li><Link to="/dashboard/myproduct">My Product</Link></li>
                            </>
                        } */}

                        {
                            isAdmin && <>
                                <li><Link to="/dashboard/allseller">All Seller</Link></li>
                                <li><Link to="/dashboard/allbuyer">All Buyer</Link></li>

                            </>}

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;