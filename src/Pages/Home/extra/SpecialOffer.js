import React from 'react';
import india from '../../../assets/india.jpg'
import malaysia from '../../../assets/malaysia.jpg'
import italy from '../../../assets/italy.jfif'
import dubai from '../../../assets/dubai.jfif'
import { MdFoodBank, MdPlace } from 'react-icons/md';
import { FaPlane } from 'react-icons/fa';
import { BiRestaurant } from 'react-icons/bi';

const SpecialOffer = () => {
    return (
        <div className='pt-16 bg-slate-100'>
            <p className='text-center text-3xl font-semibold font-serif'>Our Special Tour Offer</p>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 px-16 py-16'>
                <div className='lg:flex md:flex-row sm:flex-row gap-5'>
                    <img className='h-52 w-80 rounded-lg' src={india} alt="" />
                    <div>
                        <p className='text-xl mb-2 font-semibold'>India</p>
                        <p className='text-red-500'>Price: $1900</p>
                        <p className="rating rating-sm py-3">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </p>
                        <p className='text-justify'>The Taj Mahal, Agra. There are few sights in the world as iconic as the Taj Mahal, which is a must-see on most India itineraries..... </p>
                        <div className='flex gap-6 pt-3 text-2xl text-gray-700'>
                            <MdPlace></MdPlace>
                            <MdFoodBank></MdFoodBank>
                            <FaPlane></FaPlane>
                            <BiRestaurant></BiRestaurant>
                        </div>
                    </div>
                </div>
                <div className='lg:flex md:flex-row sm:flex-row gap-5'>
                    <img className='h-52 w-80 rounded-lg' src={dubai} alt="" />
                    <div>
                        <p className='text-xl mb-2 font-semibold'>Dubai</p>
                        <p className='text-red-500'>Price: $2500</p>
                        <p className="rating rating-sm py-3">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </p>
                        <p className='text-justify'>Dubai include the Museum of the Future, the Palm Tower observation deck, La Perle stage show, Infinity des Lumieres museum...... </p>
                        <div className='flex gap-6 pt-3 text-2xl text-gray-700'>
                            <MdPlace></MdPlace>
                            <MdFoodBank></MdFoodBank>
                            <FaPlane></FaPlane>
                            <BiRestaurant></BiRestaurant>
                        </div>
                    </div>
                </div>
                <div className='lg:flex md:flex-row sm:flex-row gap-5'>
                    <img className='h-52 w-80 rounded-lg' src={malaysia} alt="" />
                    <div>
                        <p className='text-xl mb-2 font-semibold'>Malaysia</p>
                        <p className='text-red-500'>Price: $3000</p>
                        <p className="rating rating-sm py-3">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </p>
                        <p className='text-justify'>Malaysia is most definitely a family-friendly destination with stunning beaches, great food, and a fascinating culture to experience...... </p>
                        <div className='flex gap-6 pt-3 text-2xl text-gray-700'>
                            <MdPlace></MdPlace>
                            <MdFoodBank></MdFoodBank>
                            <FaPlane></FaPlane>
                            <BiRestaurant></BiRestaurant>
                        </div>
                    </div>
                </div>
                <div className='lg:flex md:flex-row sm:flex-row gap-5'>
                    <img className='h-52 w-80 rounded-lg' src={italy} alt="" />
                    <div>
                        <p className='text-xl mb-2 font-semibold'>Italy</p>
                        <p className='text-red-500'>Price: $3000</p>
                        <p className="rating rating-sm py-3">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </p>
                        <p className='text-justify'>Rome. With 25 million of foreign visitors a year, Rome is in the lead in the charts of the most loved Italian cities by the tourists that..... </p>
                        <div className='flex gap-6 pt-3 text-2xl text-gray-700'>
                            <MdPlace></MdPlace>
                            <MdFoodBank></MdFoodBank>
                            <FaPlane></FaPlane>
                            <BiRestaurant></BiRestaurant>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default SpecialOffer;