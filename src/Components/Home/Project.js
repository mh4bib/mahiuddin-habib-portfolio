import React from 'react';
import './Project.css';

const Project = ({ project, setId }) => {
    const { _id, name, desc, fullPage, picture1, picture2, picture3, bulletPoints } = project;

    return (
        <div className='project-container'>
            <div className='relative'>
                <div className='h-[400px] overflow-hidden rounded-xl bg-orange-400 project-img'>
                    <img className=' rounded-xl' src={fullPage} alt="" />
                </div>

                <div className='bg-[#a882ff] h-[400px] absolute top-0 p-4 rounded-xl project-desc text-[black]'>
                    <h1 className='text-2xl font-semibold mb-3'>{name}</h1>
                    <p className='text-justify mb-3'>{desc.slice(0, 200)}...</p>
                    <ul className='text-left'>
                        {bulletPoints.map(p=><li># {p.slice(0,32)}..</li>).slice(0,3)}
                    </ul>
                    <label for="my-modal-6" class="btn btn-primary absolute bottom-4 right-[110px]" onClick={()=>setId(_id)}>See Detail</label>
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