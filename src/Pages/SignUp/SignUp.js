import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
            <div className="hero w-full my-5">
                <div className="hero-content">
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 py-20">
                        <h1 className="text-5xl text-center text-blue-400 font-semibold">Sign Up</h1>
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Your Name" className="input input-bordered w-96" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered w-96" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered w-96" required />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary w-96" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className='text-center'>Already have an account. Please <Link className='text-orange-600 font-bold' to='/login'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;