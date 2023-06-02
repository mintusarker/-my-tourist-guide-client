import React from 'react';
import about from '../../../assets/about-us2.jpg'

const AboutUs = () => {
    return (

        <div className='w-full px-16 bg-slate-100'>
            <div className='sm:flex-row md:flex lg:flex justify-center items-center gap-10 py-14'>
                <div className='lg:w-2/4 my-6 justify-center'>
                    <h2 className='text-3xl font-semibold font-serif py-3'>About Us</h2>
                    <img className='rounded-md w-full h-44' src={about} alt="" />
                    <div className='flex items-center gap-4 font-semibold justify-center pt-6'>
                        <div><p style={{ lineHeight: '55px' }} className='w-16 h-16 rounded-full text-center border-4 border-red-600'>1000+</p>
                        </div>
                        <p>Services Completed</p>
                    </div>
                </div>
                <div className='w-full lg:-mt-10'>
                    <p className='text-xl font-semibold mb-5'>Most trusted Travel Service</p>
                    <cite className='text-lg'>
                        For 10 years, We have worked to help people for their travel. We make ensure that our services is totally trusted and comfortable. Our first priority is our client As the world's leading travel organization. At every level, we collaborate with people around the world to develop and deliver innovative solutions that make comfort travel and the places in which they live.
                    </cite>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;