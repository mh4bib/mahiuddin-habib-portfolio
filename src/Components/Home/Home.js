import React from 'react';
import JotformEmbed from 'react-jotform-embed';
import Banner from './Banner';
import Projects from './Projects';

const Home = ({setPrrojects}) => {
    return (
        <div>
            <Banner></Banner>
            <Projects setPrrojects={setPrrojects}></Projects>
            <div>
            <JotformEmbed src="https://form.jotform.com/221594388535466"/>
            </div>
        </div>
    );
};

export default Home;