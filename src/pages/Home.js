import React from 'react';
import Banner from '../components/Banner';
import HomeProjects from '../components/HomeProjects';
import HomeServices from '../components/HomeServices';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeProjects></HomeProjects>
            <HomeServices></HomeServices>
        </div>
    );
};

export default Home;