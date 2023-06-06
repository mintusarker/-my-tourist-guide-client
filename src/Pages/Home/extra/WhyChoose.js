import React from 'react';
import { TbReplaceFilled } from "react-icons/tb";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { MdOutlineFindReplace } from "react-icons/md";

const WhyChoose = () => {
    return (
        <div className='px-16 pt-16 bg-slate-100'>
            <p className='text-center text-3xl font-semibold font-serif'>Why choose our tour packages</p>
            <p className='text-center py-4'>We offer most competitive rates and offers for wonderful and beautiful places.</p>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                <div className='text-center rounded-lg p-6'>
                    <p><TbReplaceFilled className='w-full text-3xl text-blue-400 mx-auto'></TbReplaceFilled></p>
                    <p className='my-5 text-xl font-medium'>Unique Destination</p>
                    <p className=''>
                        Looking for a unique vacation destinations? Then maybe a trip to one of the 10 most unique tourist destination might.
                    </p>
                </div>
                <div className='text-center rounded-lg p-6'>
                    <p><RiMoneyDollarCircleLine className='w-full text-3xl text-blue-400 mx-auto'></RiMoneyDollarCircleLine></p>
                    <p className='my-5 text-xl font-medium'>Worth of Money</p>
                    <p>
                        There is not a better way to spend more & unneccery  money. Just need right money for right travel. This is what we say, others and science.
                    </p>
                </div>
                <div className='text-center rounded-lg p-6'>
                    <p><MdOutlineFindReplace className='w-full text-4xl text-blue-400 mx-auto'></MdOutlineFindReplace></p>
                    <p className='my-5 text-xl font-medium'>Wonderful Places</p>
                    <p>
                        We do our best to manage all wonderful package for wonderful site so the every moment are enjoyable for you.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default WhyChoose;