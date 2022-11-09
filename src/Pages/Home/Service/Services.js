import React, { useEffect, useState } from 'react';
import ServiceCardLimit from './ServiceCardLimit';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('Service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='bg-slate-100 py-10'>
            <div className='text-center'>
                <h2 className="text-4xl pt-8 font-bold font-serif">My service Area</h2>
                <p className='text-xl font-serif py-2'>I try to my best for your travel time. No more Confusion, No more Hesitation. Let's Enjoy.</p>
            </div>
            <div className='grid gap-5 px-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCardLimit
                        key={service._id}
                        service={service}
                    ></ServiceCardLimit>)
                }
            </div>
           <div className='text-center'> <button className="btn btn-active  btn-warning  btn-wide">See All</button></div>

        </div>
    );
};

export default Services;