import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const AllCard = ({ service }) => {
    const { _id, img, price, title, description } = service;
    return (
        <div className="card card-compact my-10 bg-base-100 shadow-xl">
            <figure>
            <PhotoProvider>
                    <PhotoView src={img}>
                    <img style={{width:'100%'}} className='h-80' src={img} alt="" />
                    </PhotoView>
                    </PhotoProvider>
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{title}</h2>
                <p className='text-lg'>{description.slice(0, 100) + '....'}</p>
                <p className='text-xl text-orange-600 font-semibold'>price : ${price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/detail/${_id}`}><button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AllCard;