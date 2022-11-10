import React, { useContext } from 'react';
import { Navigate, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Review = () => {

    const { user } = useContext(AuthContext)
    const { title, price, _id } = useLoaderData()

    if (!user?.email) {
        return Navigate('/')
    }

    const handleReviewSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email || 'unregistered';
        const message = form.message.value;

        const reviewItem = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            message
        }

        fetch('http://localhost:5000/review' , {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(reviewItem)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                alert ('Review Added Successfully');
                form.reset()
            }
        })
        .catch(error => console.error(error));
    }


    return (
        <div>
            <form onSubmit={handleReviewSubmit}>
                <h2 className='text-center text-2xl my-10 font-serif text-blue-500'>Review Form</h2>
                <h2 className='text-center text-2xl my-10 font-semibold text-orange-500'>Place Name : {title}</h2>
                <div className='my-10 w-1/2 mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1'>
                    <input type="text" name='name' placeholder="name" defaultValue={user?.displayName} className="input input-bordered input-success w-full my-4" required/>
                    <input type="text" name='email' placeholder="your email" defaultValue={user?.email} className="input input-bordered input-success w-full" readOnly />
                    <textarea name='message' className="textarea textarea-accent my-5" placeholder="Your review put here" required></textarea>
                    <div className='text-center'><input className='btn btn-secondary w-40' type="submit" value="Review submit"/></div>
                </div>
            </form>
        </div>
    );
};

export default Review;