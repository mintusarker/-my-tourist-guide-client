import React from 'react';
import discount from '../../../assets/h2-img-1.png'
import './Discount.css'

const Discount = () => {
    return (
        <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-auto align-baseline justify-center px-16 discount'>
            <div>
                <img className='w-auto mx-auto p-9 h-96' src={discount} alt="" />
            </div>
            <div>
                <h2 className='text-5xl font-serif text-slate-200'>Last Minute Offer</h2>
                <p className='text-4xl font-medium text-slate-300 py-20 font-serif'>We offer you all packages right now under discount. But it's limited. If you want join to us for make your journey safe and comfortable, So hurry up to take this offer. </p>
            </div>
        </div>
    );
};

export default Discount;