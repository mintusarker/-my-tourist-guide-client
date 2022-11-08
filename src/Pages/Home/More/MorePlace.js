import React from 'react';
import img3 from '../../../assets/img3.jpg';
import img4 from '../../../assets/img4.png';
import img5 from '../../../assets/img5.jpg';
import img6 from '../../../assets/ima6.jpg';


const MorePlace = () => {
    return (
        <div className='bg-slate-100 pb-10' >
            <h2 className='text-4xl text-center py-14 font-serif font-semibold'>Some More Tourist Place</h2>
           <div className='flex gap-5 mx-10 flex-col sm:flex-row'>
            
           <div className="card card-compact rounded-lg w-96 bg-base-100 shadow-xl">
                <figure><img className='h-80' src={img3} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shat Gambuj Mosque</h2>
                    <p>Bagerhat, Bangladesh</p>
                </div>
            </div>
            <div className="card card-compact rounded-lg w-96 bg-base-100 shadow-xl">
                <figure><img className='h-80' src={img4} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">National Martyrs Monument</h2>
                    <p>Saver, Dhaka, Bangladesh</p>
                </div>
            </div>
            <div className="card card-compact rounded-lg w-96 bg-base-100 shadow-xl">
                <figure><img className='h-80' src={img5} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Ahsan Manzil Museum</h2>
                    <p>Dhaka, Bangladesh</p>
                </div>
            </div>
            <div className="card card-compact rounded-lg w-96 bg-base-100 shadow-xl">
                <figure><img className='h-80' src={img6} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Lalbag Port</h2>
                    <p>Dhaka, Bangladesh</p>
                </div>
            </div>
           </div>
        </div>
    );
};

export default MorePlace;