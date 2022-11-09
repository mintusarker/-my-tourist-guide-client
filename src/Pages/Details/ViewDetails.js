import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {

    const news = useLoaderData();
    console.log(news)
    const { img, price, title, description } = news;
    return (
        <div className="card card-compact my-10 bg-base-100 shadow-xl">
            <figure><img className='h-80' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{title}</h2>
                <p className='text-lg'>{description}</p>
                <p className='text-xl text-orange-600 font-semibold'>price : ${price}</p>
                <div className="card-actions justify-end">
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;