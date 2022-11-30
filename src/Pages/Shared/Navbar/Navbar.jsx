import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import { FaUser } from "react-icons/fa";
import logo from '../../../assets/logo/logo.png'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch((error) => { console.log(error) })
    }

    const menuItems = <React.Fragment>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        {
            user?.email ?
                <>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/login"><button onClick={handleLogOut}>Sign Out</button></Link></li>
                    <span className='mt-3'>{user?.displayName}</span>
                    <span className='mt-3'>{user?.role}</span>
                </>
                :
                <li><Link to="/login">Login</Link></li>
        }

    </React.Fragment>

    return (
        <div className="navbar bg-base-100 flex justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="w-10 text-2xl">
                    <img src={logo} alt="" />
                </Link>
                <Link to="/" className="text-bold mr-4 text-xl">
                    <h2 className='text-2xl'>PHONES RESELL</h2>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            {user?.photoURL ?
                <img style={{ height: '30px', borderRadius: '50px' }} src={user?.photoURL} alt="" />

                :
                <FaUser></FaUser>
            }
            <label htmlFor="dashboard-drawer" tabIndex={1} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Navbar;