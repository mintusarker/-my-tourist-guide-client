import React, { useEffect, useState } from 'react';
import AllCard from './AllCard';

const AllService = () => {
    const [allCards, setAllCards] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setAllCards(data))
    }, [])
    return (
        <div className='grid gap-5 px-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

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