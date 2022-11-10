import React, { useEffect, useState } from 'react';

const ReviewSet = ({ review, handleDelete }) => {
    const { _id, serviceName, service, message, customer } = review;
    const [reviewService, setReviewService] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/service/${service}`)
            .then(res => res.json())
            .then(data => setReviewService(data))
    }, [service])

    return (
        <tr>
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
                    <button onClick={() => handleDelete(_id)} className='btn btn-warning'>Delete</button>
                    {/* <input type="checkbox" className="checkbox" /> */}
                </label>
            </th>
            <th>
                <label>
                    <button className='btn btn-warning'>Edit Review</button>
                    {/* <input type="checkbox" className="checkbox" /> */}
                </label>
            </th>

        </tr>
    );
};

export default ReviewSet;