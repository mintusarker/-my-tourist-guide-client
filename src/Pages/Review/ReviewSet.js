import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ReviewSet = ({ review, handleDelete, handleUpdateUser }) => {
    const { _id, serviceName, service, message, customer } = review;
    const [reviewService, setReviewService] = useState({})

    useEffect(() => {
        fetch(`https://my-tourist-server.vercel.app/service/${service}`)
            .then(res => res.json())
            .then(data => setReviewService(data))
    }, [service])

    return (
        <tr className=''>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className=" w-24 h-24">
                            {
                                reviewService?.img &&
                                <img src={reviewService.img} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
            </td>
            <td>
                {message}
            </td>
            <td>
                {customer}
            </td>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-sm btn-warning'>Delete</button>
                </label>
            </th>
            <th>
                <label>
                    <Link to={`/update/${_id}`}><button className='btn btn-sm btn-warning'>Edit Review</button></Link>
                </label>
            </th>

        </tr>
    );
};

export default ReviewSet;