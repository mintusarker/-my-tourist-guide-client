import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCardLimit from './ServiceCardLimit';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://my-tourist-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='bg-slate-100 py-10'>
            <div className='text-center'>
                <h2 className="text-4xl pt-8 font-semibold">Our service Area</h2>
                <p className='text-xl py-2 px-8 font-medium'>We try to my best for your travel time. No more Confusion, No more Hesitation. Let's Enjoy.</p>
            </div>
            <div className='grid gap-8 px-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {
                    services.map(service => <ServiceCardLimit
                        key={service._id}
                        service={service}
                    ></ServiceCardLimit>)
                }
            </div>
            <div className='text-center'><Link to='/allService'><button className="btn btn-success btn-wide hover:bg-green-500 text-xl mt-4">See All</button></Link> </div>

        </div>
    );
};

export default Services;