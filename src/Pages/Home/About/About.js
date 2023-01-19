import React from 'react';
import travel3 from '../../../assets/travel3.jpg'

const About = () => {
    return (
        
            <div className="hero w-full p-10 pb-28 bg-slate-100">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img alt='' src={travel3} className="max-w-sm h-96 w-full rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-4xl font-semibold font-serif mb-5">About Travel</h1>
                        <h2 className='text-2xl font-serif my-10'>The World is a Book And Those Who Do Not Travel Read Only One page.</h2>
                        <p className="text-lg my-3">“I always wonder why birds stay in the same place when they can fly anywhere on earth. Then I ask myself the same question” - travel quote by Huran Yahya.</p>
                        <p className="text-lg my-3"> “Jobs fill your pockets, adventures fill your soul.” - Jaime Lyn Beatty.</p>
                        <p className="text-lg my-3">“An Investment in Travel is An Investment into Yourself”- Matthew Karsten.</p>
                        <p className="text-lg my-3"> “Travel is never a matter of money but of courage” - Paolo Coelho.</p>
                    </div>
                </div>
            </div>
    );
};

export default About;