import React from 'react';
import './Project.css';
import { Link } from 'react-router-dom';
import { BsEye, BsCodeSlash } from 'react-icons/bs';
import { VscServerProcess } from 'react-icons/vsc';
import powerTools from '../Images/multi-device-power-tools.png';

const Project = ({ project, setId }) => {
    const { _id, name, desc, fullPage, picture1, picture2, picture3, bulletPoints } = project;

    return (
        <div className='project-container'>
            <div className='relative overflow-hidden'>
                <div className='h-[450px] overflow-hidden rounded-md bg-white project-img'>
                    <img className='' src={fullPage} alt="" />
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

                <div className='bg-[#90e0e8] h-[450px] absolute top-[158px] rounded-md project-desc text-[black]'>
                    <div className='p-4'>
                        <h1 className='text-2xl font-semibold'>{name}</h1>
                        <p className='text-justify mb-3'>{desc.slice(0, 120)}...</p>
                        <ul className='list-disc list-inside text-left'>
                            {bulletPoints.map(p => <li>{p.slice(0, 32)}..</li>).slice(0, 3)}
                        </ul>
                        <div className="badge badge-outline mx-1 mt-3">React</div>
                        <div className="badge badge-outline mx-1 mt-3">Express js</div>
                        <div className="badge badge-outline mx-1 mt-3">Node js</div>
                    </div>

                    {/* hidden content */}
                    <div className='p-4 bg-[#90e0e8] absolute top-[0px] rounded-md hidden-content'>
                        <h1 className='text-2xl font-semibold'>{name}</h1>
                        <div className='flex justify-between items-center my-2'>
                            <span className='flex flex-col justify-center items-center'>
                                <BsEye className='text-[22px]'></BsEye>
                                <Link to={'/'} className='font-semibold hover:underline'>Live Site</Link>
                            </span>
                            <span className='flex flex-col justify-center items-center'>
                                <BsCodeSlash className='text-[22px]'></BsCodeSlash>
                                <Link to={'/'} className='font-semibold hover:underline'>Client Side</Link>
                            </span>
                            <span className='flex flex-col justify-center items-center'>
                                <VscServerProcess className='text-[22px]'></VscServerProcess>
                                <Link to={'/'} className='font-semibold hover:underline'>Server Side</Link>
                            </span>
                        </div>
                        <p className='text-justify mb-3'>{desc.slice(0, 100)}...</p>
                        <ul className='list-disc list-inside text-left'>
                            {bulletPoints.map(p => <li>{p.slice(0, 32)}..</li>).slice(0, 3)}
                        </ul>
                        <div className="badge badge-outline mx-1 mt-3">React</div>
                        <div className="badge badge-outline mx-1 mt-3">Express js</div>
                        <div className="badge badge-outline mx-1 mt-3">Node js</div>
                        <div className="badge badge-outline mx-1 mt-3">MongoDB</div>
                        <div className="badge badge-outline mx-1 mt-3">Redux</div>
                        <div className="badge badge-outline mx-1 mt-3">Firebase</div>
                        <label for="my-modal-6" class="bg-blue-700 inline-block px-[12px] py-[5px] rounded-md mt-6 cursor-pointer" onClick={() => setId(_id)}>SEE DETAILS</label>
                    </div>
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