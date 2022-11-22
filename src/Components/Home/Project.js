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
            <div className='relative overflow-hidden rounded-md'>
                <div className='h-[490px] overflow-hidden rounded-md bg-white project-img'>
                    <img className='' src={fullPage} alt="" />
                </div>

                <div className='bg-[#90e0e8] h-[490px] absolute top-[158px] rounded-md project-desc text-[black]'>
                    <div className='p-4'>
                        <h1 className='text-2xl font-semibold'>{name}</h1>
                        <p className='text-justify my -3'>{desc.slice(0, 150)}...</p>
                        <ul className='list-disc list-inside text-left mb-4'>
                            {bulletPoints.map(p => <li>{p.slice(0, 40)}..</li>).slice(0, 3)}
                        </ul>
                        <div className="badge badge-outline mx-1 mt-2">React</div>
                        <div className="badge badge-outline mx-1 mt-2">Express js</div>
                        <div className="badge badge-outline mx-1 mt-2">Node js</div>
                        <div className="badge badge-outline mx-1 mt-2">MongoDB</div>
                        <div className="badge badge-outline mx-1 mt-2">Redux</div>
                        <div className="badge badge-outline mx-1 mt-2">Firebase</div>
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
                        <p className='text-justify mb-3'>{desc.slice(0, 150)}...</p>
                        <ul className='list-disc list-inside text-left'>
                            {bulletPoints.map(p => <li>{p.slice(0, 40)}..</li>).slice(0, 4)}
                        </ul>
                        <div className="badge badge-outline mx-1 mt-2">React</div>
                        <div className="badge badge-outline mx-1 mt-2">Express js</div>
                        <div className="badge badge-outline mx-1 mt-2">Node js</div>
                        <div className="badge badge-outline mx-1 mt-2">MongoDB</div>
                        <div className="badge badge-outline mx-1 mt-2">Redux</div>
                        <div className="badge badge-outline mx-1 mt-2">Firebase</div>
                        <br />
                        <label for="my-modal-6" class="bg-blue-700 inline-block px-[12px] py-[5px] rounded-md mt-6 cursor-pointer" onClick={() => setId(_id)}>SEE DETAILS</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;