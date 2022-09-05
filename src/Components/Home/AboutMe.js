import React from 'react';
import profilePic from '../Images/profile-photo.png';

const AboutMe = () => {
    return (
        <div id='aboutme' className='bg-[#8BFFFF] py-12'>
        <h1 className='text-3xl font-bold'>About Me</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mx-4 md:mx-16 my-8'>
            <div className='p-12 rounded-xl'>
                <img src={profilePic} alt="" className='w-[250px] mx-auto rounded-lg'/>
                <h2 className='text-2xl'>Md. Mahiuddin Habib</h2>
                <a href="mailto:mh.habib137@gmail.com">mh.habib137@gmail.com</a>
            </div>
            <div className='md:text-left p-12 rounded-xl'>
                <p>I am a front-end web developer. I am passionate about technology since my childhood. Now, I am studying CSE at a public university and have been learning web development for a few years.</p>
                <h3 className='mt-4 font-semibold'>Educational Info</h3>
                <p>studying BSC Engg. in Computer Science and Engineering </p>
                <p className=''>Mawlana Bhasani Science and Technology University</p>

                <h3 className='mt-4 font-semibold'>Skills</h3>
                <p>1. Learned ReactJs, Javascript, Tailwind css, Bootstrap, vanilla css and so on</p>
                <p className=''>2. Fluent in English</p>

                <h3 className='mt-4 font-semibold'>Projects I've done</h3>
                <ul>
                    <li><a href="https://books-warehouse-e0226.web.app/">1. Books Warehouse</a></li>
                    <li><a href="https://health-corner-a79d1.web.app/">2. Health Corner</a></li>
                    <li><a href="https://product-analysis-car.netlify.app/">3. Car Mania</a></li>
                </ul>
            </div>
        </div>
        </div>
    );
};

export default AboutMe;