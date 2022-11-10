import React, { useEffect, useState } from 'react';
import useTitle from '../../../Hooks/UseTitle';
import AllCard from './AllCard';

const AllService = () => {
    const [allCards, setAllCards] = useState([])
    useTitle('AllService')

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setAllCards(data))
    }, [])
    return (
        <div className=' bg-slate-100 py-10 grid px-20 gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

            {
                allCards?.map(service => <AllCard
                key ={service._id}
                service={service}
                ></AllCard>)
            }

        </div>
    );
};

export default AllService;