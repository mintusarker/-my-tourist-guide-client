import React from 'react';
import travel from '../../../assets/travel.jpg'
import './Banner.css'

const Banner = () => {
    return (

        <div className='h-96 banner-img'>
            {/* <div className='banner-img'>
                <img  className='img-travel' src={travel} alt="" />
            </div> */}
            <div className='absolute top-60 flex justify-center transform -translate-y-1/2 w-full mx-auto'>
                <p className='text-center font-serif text-2xl text-slate-200'>Anyone can traveling for leisure, business, sports, family reasons, <br />romance, shopping, or recreation purposes. But in true sense, <br /> the whole World is a classic hotspot of tourism with <br /> diverse beauty and natural wonders.</p>
            </div>
        </div>

    );
};

export default Banner;