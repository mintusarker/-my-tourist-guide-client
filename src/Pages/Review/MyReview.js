import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import ReviewSet from './ReviewSet';

const MyReview = () => {
    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/review?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete this order');
        if (proceed) {
            fetch(`http://localhost:5000/review/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                      if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = reviews.filter(review =>review._id !== id);
                        setReviews(remaining)
                      }
           })
        }
    }



    return (
        <div>
            <h2 className='text-4xl text-center my-5 text-orange-400'>You have total review {reviews.length}</h2>

            <div className="overflow-x-auto px-24 mb-10 w-full">
                <table className="table w-full">

                    <thead>
                        <tr>

                            <th>picture</th>
                            <th>Title</th>
                            <th>Review</th>
                            <th>Customer</th>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews?.map(review => <ReviewSet
                                key={review._id}
                                review={review}
                                handleDelete={handleDelete}
                            ></ReviewSet>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyReview;