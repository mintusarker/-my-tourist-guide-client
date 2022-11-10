import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const MyReview = () => {
    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/review?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    return (
        <div>
            <h2 className='text-4xl text-center my-5 text-orange-400'>You have total review {reviews.length}</h2>
        </div>
    );
};

export default MyReview;