import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UpdateReview = () => {

    const storeReview = useLoaderData();
    console.log(storeReview)
    const [user, setUser] = useState(storeReview)
    const navigate = useNavigate()

    const handleUpdateUser = event => {
        event.preventDefault();
        fetch(`https://my-tourist-server.vercel.app/review/${storeReview._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Review Updated')
                    navigate('/review')
                    console.log(data);
                }

            })
    }

    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newUser = { ...user };
        newUser[field] = value;
        setUser(newUser);
    }


    return (
        <div className='mb-32 text-center'>
            <h2 className='text-center font-semibold text-3xl mt-20 text-rose-500'>Please update Your review <br /> for</h2>
            <h4 className='text-3xl font-semibold text-green-600'> {storeReview?.serviceName}</h4>

            <form className='my-8' onSubmit={handleUpdateUser}>
                <div className='flex justify-center items-center gap-2'>
                    <label htmlFor="">Review : </label>
                    <textarea onChange={handleInputChange} defaultValue={storeReview.message} type="text" name="review" className="textarea textarea-success w-72" required></textarea>
                </div>

                <br />
                <br />
                <button onClick={handleUpdateUser} className="btn btn-success hover:bg-lime-500" type='submit'>Update Review</button>
            </form>
        </div>
    );
};

export default UpdateReview;