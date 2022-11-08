import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Navber = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const buttonItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/signup'>Sign Up</Link></li>
        {
            user?.email ?
                <>

                    <li><Link to='/review'>My Review</Link></li>
                    <li><Link to='/service'>Add Service</Link></li>

                    <li>
                        <button onClick={handleLogOut}>Sing Out</button>
                    </li>
                </>
                :
                <li><Link to='/login'>Login</Link></li>
        }
    </>


    return (
        <div>
            <div className="navbar bg-slate-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost md:hidden lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {buttonItems}
                        </ul>
                    </div>
                    <h3 className="btn btn-ghost normal-case text-xl">My Tourist Guide</h3>
                </div>
                <div className="navbar-center pl-50 hidden md:flex lg:flex">
                    <ul className="menu menu-horizontal">
                        {buttonItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navber;