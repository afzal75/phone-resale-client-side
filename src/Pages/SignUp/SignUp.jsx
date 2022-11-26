import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import images from '../../assets/images/signup.jpg'
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {

    const {createUser, updateUser} = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const navigate = useNavigate();

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const selection = form.selection.value;
        console.log(name, photoURL, email, password, selection );


        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setSignUpError('');
            toast.success('User Created Successfully');
            const userInfo = {
                displayName: name
            }
            updateUser(userInfo)
            .then( () => {
                navigate('/')
            })
            .catch( (error) => console.log(error))
        })
        .catch(error => {
            console.log(error)
            setSignUpError(error.message)
        })
    }
    return (
        <div>
            <div className="hero my-20 w-full">
                <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img className='' src={images} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm py-20 shadow-2xl bg-base-100">
                        <h1 className="text-5xl text-center font-bold">Sign Up</h1>
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text" name="photoURL" placeholder="PhotoURL" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                            </div>
                            <select name='selection' className="select select-bordered w-full max-w-xs">
                                <option>Buyer</option>
                                <option>Seller</option>
                            </select>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className='text-center'>Already have an account? <Link className='text-blue-600 font-bold' to="/login">Login</Link></p>
                        {signUpError && <p className='text-red-600'>{signUpError}</p>}
                    </div>
                </div>
            </div >
        </div >
    );
};

export default SignUp;