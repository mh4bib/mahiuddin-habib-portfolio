import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetail = ({prrojects}) => {
    const {id} = useParams();
    console.log(prrojects);
    const [projct, setProjct]= useState([]);
    useEffect( ()=>{
        fetch('Projects.json')
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])
    // console.log(project);
    return (
        <div>
            
        </div>
    );
};

export default ProjectDetail;