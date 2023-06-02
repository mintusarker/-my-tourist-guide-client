import React from 'react';

const Opinion = () => {

    const opinion = [
        {
            id: 1,
            name: 'Alex',
            review: 'Try to get out more and get to know them. They are too good and honest, I fell very comfort to do my travel with their service'
        },
        {
            id: 2,
            name: 'Anderson',
            review: 'Your loyal customer base is outstanding. Customers often ask for you by name and you have a lot of repeat customers as a result. Great job!'
        },
        {
            id: 3,
            name: 'katlin',
            review: 'You’re really good at following up with the client so as to ensure that they are never left in the dark. Keep it up!'
        },
        {
            id: 4,
            name: 'Jhon',
            review: 'You are really good at focusing on what customers need and require. You have a real instinct to understand our customers. Good work!'
        },
    ]
    return (
        <div className='px-16 pb-16 bg-slate-100'>
            <p className='text-3xl font-semibold font-serif py-7'>Some Review</p>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6'>
                {opinion.length &&
                    opinion.map(opi => <div className='border shadow-lg shadow-slate-400 p-2 bg-slate-200 rounded-lg' key={opi?.id}>
                        <p style={{lineHeight:'70px'}} className='text-center border-2 m-3 border-red-500 w-20 h-20 mx-auto rounded-full font-medium'>{opi?.name}</p>
                        <cite className='text-justify'>{opi?.review}</cite>

                    </div>)
                }
            </div>
        </div>
    );
};

export default Opinion;