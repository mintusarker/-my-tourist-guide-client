import React from 'react';
import useTitle from '../../../Hooks/UseTitle';

const AddService = () => {
    useTitle('Add Service')
    return (
        <div>
            <h2 className='text-3xl text-center my-10 text-orange-500'>Service Add Which You Want</h2>
        </div>
    );
};

export default AddService;