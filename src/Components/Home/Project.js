import React from 'react';
import './Project.css';
import powerTools from '../Images/multi-device-power-tools.png';
import { Link } from 'react-router-dom';

const Project = ({ project, setId }) => {
    const { _id, name, desc, fullPage, picture1, picture2, picture3, bulletPoints } = project;

    return (
        <div className='project-container'>
            <div className='relative overflow-hidden'>
                <div className='h-[450px] overflow-hidden rounded-xl bg-white project-img'>
                    <img className='' src={powerTools} alt="" />
                    {/* <div className='p-4'>
                        <h1 className='text-2xl font-semibold mb-3'>{name}</h1>
                        <p className='text-justify mb-3'>{desc.slice(0, 100)}...</p>
                        <ul className='list-disc list-inside text-left'>
                            {bulletPoints.map(p => <li>{p.slice(0, 32)}..</li>).slice(0, 3)}
                        </ul>
                        <div className="badge badge-outline mx-1 mt-3">React</div>
                        <div className="badge badge-outline mx-1 mt-3">Express js</div>
                        <div className="badge badge-outline mx-1 mt-3">Node js</div>
                    </div> */}
                </div>

                <div className='bg-[#a882ff] h-[450px] absolute top-[158px] rounded-xl project-desc text-[black]'>
                    <div className='p-4'>
                        <h1 className='text-2xl font-semibold mb-3'>{name}</h1>
                        <Link to={'/'} className='mx-2 hidden-content'>Live site</Link>
                        <Link to={'/'} className='mx-2 hidden-content'>Client side</Link>
                        <Link to={'/'} className='mx-2 hidden-content'>Server side</Link>
                        <p className='text-justify mb-3'>{desc.slice(0, 100)}...</p>
                        <ul className='list-disc list-inside text-left'>
                            {bulletPoints.map(p => <li>{p.slice(0, 32)}..</li>).slice(0, 3)}
                        </ul>
                        <div className="badge badge-outline mx-1 mt-3">React</div>
                        <div className="badge badge-outline mx-1 mt-3">Express js</div>
                        <div className="badge badge-outline mx-1 mt-3">Node js</div>
                        <div className="badge badge-outline mx-1 mt-3 hidden-content">MongoDB</div>
                        <div className="badge badge-outline mx-1 mt-3 hidden-content">Redux</div>
                        <div className="badge badge-outline mx-1 mt-3 hidden-content">Firebase</div>
                    </div>
                    <label for="my-modal-6" class="btn btn-primary absolute bottom-4 right-[110px] hidden" onClick={() => setId(_id)}>See Detail</label>
                </div>
            </div>





            {/* <div className="w-[100%] md:w-95 bg-base-100 shadow-xl rounded-xl">
                <figure><img className='rounded-t-xl' src={picture1} alt="project" /></figure>
                <div className="p-4">
                    <h2 className="text-2xl">
                        {name}
                    </h2>
                    <p>{desc.slice(0, 210)}...</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">ReactJs</div>
                        <div className="badge badge-outline">NodeJs</div>
                        <div className="badge badge-outline">Firebase</div>
                        <div className="badge badge-outline">Stripe</div>
                    </div>
                    <label for="my-modal-6" class="btn modal-button" onClick={()=>setId(_id)}>open modal</label>
                </div>
            </div> */}
        </div>
    );
};

export default Project;