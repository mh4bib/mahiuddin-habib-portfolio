import React from 'react';
import JotformEmbed from 'react-jotform-embed';
import Footer from '../Shared/Footer';
import AboutMe from './AboutMe';
import Banner from './Banner';
import Contact from './Contact';
import Projects from './Projects';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Projects></Projects>
            <AboutMe></AboutMe>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;