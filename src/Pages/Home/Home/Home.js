import React from 'react';
import useTitle from '../../../Hooks/UseTitle';
import About from '../About/About';
import Banner from '../Banner/Banner';
import MorePlace from '../More/MorePlace';
import Services from '../Service/Services';
import AboutUs from '../extra/AboutUs';
import Opinion from '../extra/Opinion';
import Contact from '../extra/Contact';
import WhyChoose from '../extra/WhyChoose';
import SpecialOffer from '../extra/SpecialOffer';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <MorePlace></MorePlace>
            <SpecialOffer></SpecialOffer>
            <WhyChoose></WhyChoose>
            <AboutUs></AboutUs>
            <Opinion></Opinion>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;