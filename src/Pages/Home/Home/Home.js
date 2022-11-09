import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import MorePlace from '../More/MorePlace';
import Services from '../Service/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <MorePlace></MorePlace>
            <About></About>
        </div>
    );
};

export default Home;