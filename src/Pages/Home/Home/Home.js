import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import MorePlace from '../More/MorePlace';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MorePlace></MorePlace>
            <About></About>
        </div>
    );
};

export default Home;