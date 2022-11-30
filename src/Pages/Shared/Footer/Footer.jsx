import React from 'react';
import logo from '../../../assets/logo/logo.png'

const Footer = () => {
    return (
        <footer  className='bg-black mt-5 text-white'>
            <div className="footer p-20">
                <div>
                    <img style={{width: '80px'}} src={logo} alt="" />
                    <p>PHOTO RESELL.<br />Providing reliable tech since 2022</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a href="/" className="link link-hover">Branding</a>
                    <a href="/" className="link link-hover">Design</a>
                    <a href="/" className="link link-hover">Marketing</a>
                    <a href="/" className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a href="/" className="link link-hover">About us</a>
                    <a href="/" className="link link-hover">Contact</a>
                    <a href="/" className="link link-hover">Jobs</a>
                    <a href="/" className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a href="/" className="link link-hover">Terms of use</a>
                    <a href="/" className="link link-hover">Privacy policy</a>
                    <a href="/" className="link link-hover">Cookie policy</a>
                </div>
            </div>
            <div className='text-center mt-28'>
                <p>Copyright © 2022 - All right reserved by Afzal Bhuiyan</p>
            </div>
        </footer>
    );
};

export default Footer;