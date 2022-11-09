import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCardLimit = ({service}) => {
    const {  img, price, title, description } = service;
    return (
        <div className="card card-compact my-10 bg-base-100 shadow-xl">
            <figure><img className='h-80' src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{title}</h2>
                <p className='text-lg'>{description.slice(0,100)+ '....'}</p>
                <p className='text-xl text-orange-600 font-semibold'>price : ${price}</p>
                <div className="card-actions justify-end">
                    <Link><button className="btn btn-primary">Booking</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCardLimit;