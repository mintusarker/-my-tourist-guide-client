import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateReview = () => {

    const storeReview = useLoaderData();
    const [user, setUser] = useState(storeReview)

    const handleUpdateUser = id =>{
        // console.log(user);
        fetch(`http://localhost:5000/service/${storeReview._id}` ,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
        if(data.modifiedCount > 0){
            alert('user updated');
            console.log(data);
        }
            
        })
    }

    const handleInputChange = event =>{
        const field = event.target.name;
        const value = event.target.value;
        const newUser = {...user};
        newUser[field] = value;
        setUser(newUser);
    }


    return (
        <div>
            <h2>Please update: {storeReview.name}</h2>

            <form onSubmit={handleUpdateUser}>
                <input onChange={handleInputChange} defaultValue={storeReview.name} type="text" name="name" placeholder='name' required/>
                <br />
                <input onChange={handleInputChange} defaultValue={storeReview.message} type="text" name="address" placeholder='address' required/>
                <br />
                <br />
                <button type='submit'>Update User</button>
            </form>
        </div>
    );
};

export default UpdateReview;