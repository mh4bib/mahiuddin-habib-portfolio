import React from 'react';
import resume from '../Images/mahiuddin_habib_resume_.pdf';

const Banner = () => {
    return (
        <div className='bg-gray-300 py-[5rem] md:py-[10rem] px-4'>
            <h1 className='text-5xl font-bold mb-4'>Mahiuddin Habib</h1>
            <h3 className='text-2xl font-semibold'>Full Stack Web Developer</h3>
            <p>I am a full stack web developer. As a full stack web developer, I have an active hand in <br /> implementing relationship databases, configure and deploy your applications to the cloud, and build.
            </p>
            <a href={resume} className='btn btn-primary mt-8' download><i className="fa fa-download"></i>Download CV</a>
        </div>
    );
};

export default Banner;