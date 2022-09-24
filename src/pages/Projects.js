import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Project from '../components/Project';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('https://luxury-living-server.onrender.com/projects')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [projects])
    return (
        <div>
            <h1 className='font-bold text-2xl text-center my-5 font-poppins'>All Projects Of Luxury Living</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 mx-5 px-8 gap-5 py-3">
                {
                    projects?.map(project => <Project
                        key={project._id}
                        project={project}
                    ></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;