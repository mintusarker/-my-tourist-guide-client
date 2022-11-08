import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const { login, setLoading } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            if(user){
                navigate(from, {replace: true});
            }
            setError('')
        })
        .catch(error => {
            console.error(error);
            setError(error.message);
        })
        .finally(()=>{
            setLoading(false)
        })
    };


    return (
        <div className="hero w-full my-5">
        <div className="hero-content flex-col">
            <div className="card flex-shrink-0 w-full shadow-2xl py-20">
                <h1 className="text-5xl text-center text-blue-500 font-semibold">Login</h1>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="email" className="input input-bordered w-96" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className=" w-96 input input-bordered" />
                        <label className="label">
                            <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary w-96" type="submit" value="Login" />
                        <p className='text-red-500'>{error}</p>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary w-96" type="submit" value="Login With Google" />
                    </div>
                </form>
                <p className='text-center'>New to Here. Please <Link className='text-orange-600 font-bold' to='/signup'>Sign Up</Link></p>
            </div>
        </div>
    </div>
    );
};

export default Login;