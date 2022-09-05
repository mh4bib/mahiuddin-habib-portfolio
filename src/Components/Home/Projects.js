import React, { useEffect, useState } from 'react';
import DetailModal from './DetailModal';
import Project from './Project';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [id, setId] = useState('');
    // console.log(id);
    useEffect(() => {
        fetch('Projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    return (
        <div className='mx-auto px-4 py-12 md:px-8 bg-[#8FBDFD]'>
            <h1 className='text-3xl font-semibold my-4'>Projects</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-[100%] md:w-[70%] mx-auto'>
                {
                    projects.map(project => <Project
                        key={project._id}
                        project={project}
                        setId={setId}
                        className="z-0"
                    ></Project>)
                }
                <DetailModal 
                projects={projects}
                id={id}
                ></DetailModal>
            </div>
        </div >
    );
};

export default Projects;