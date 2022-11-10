import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const ViewDetails = () => {
    const { user } = useContext(AuthContext)
    const news = useLoaderData();

    const {_id, img, price, title, description } = news;
    return (
        <div>
            <div className="card card-compact grid lg:grid-cols-2 my-10 mx-20 bg-base-100">
                <figure><img className='h-80' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{title}</h2>
                    <p className='text-lg'>{description}</p>
                    <p className='text-xl text-orange-600 font-semibold'>price : ${price}</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
                <div className="card-actions justify-center pb-10">
                    {user?.email ? 

                         <Link to={`/review/${_id}`}><button className="btn btn-primary">Add Review</button></Link>
                        : <h2 className='text-2xl text-blue-600'>Please login to add a review.</h2>

                    }
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default ViewDetails;