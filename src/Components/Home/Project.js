import React from 'react';
import { Link } from 'react-router-dom';

const Project = (project) => {
    const {_id, name, desc, picture1, picture2, picture3, bulletPoints} = project.project;
    // console.log(project); 
    return (
        <div className="w-[100%] md:w-95 bg-base-100 shadow-xl rounded-xl">
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
                <Link to={`/project-detail/${_id}`} className='btn btn-primary'>Detail</Link>
            </div>
        </div>
    );
};

export default Project;