import React, { useContext } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../Hooks/UseTitle';
import 'react-photo-view/dist/react-photo-view.css';


const ViewDetails = () => {
    const { user } = useContext(AuthContext)
    const news = useLoaderData();
    useTitle('View Details')

    const { _id, img, price, title, description } = news;
    return (
        <div>
            <h2 className='text-3xl my-8 text-primary text-center'>Details About : {title}</h2>
            <div className="card card-compact grid lg:grid-cols-2 my-10 mx-20 bg-base-100">
                <figure> 
                    <PhotoProvider>
                    <PhotoView src={img}>
                    <img className='' src={img} alt="" />
                    </PhotoView>
                    </PhotoProvider> </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{title}</h2>
                    <p className='text-lg'>{description}</p>
                    <p className='text-xl text-orange-600 font-semibold'>price : ${price}</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
                <div className="card-actions justify-center pb-10">
                    {user?.email ?
                        <>
                            <Link to={`/review/${_id}`}><button className="btn btn-primary">Add Review</button></Link>
                        </>


                        : <h2 className='text-2xl text-blue-600'>Please login to add a review.<Link className='text-orange-500' to='/login'> <button className='btn btn-info'>Login</button></Link>
                        </h2>
                    }

                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default ViewDetails;