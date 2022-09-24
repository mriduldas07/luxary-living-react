import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Project from './Project'

const HomeProjects = () => {
    const [homeProjects, setHomeProjects] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/homeProjects')
            .then(res => res.json())
            .then(data => setHomeProjects(data))
    }, [homeProjects])
    return (
        <div className='my-[90px]'>
            <h6 className='text-center mb-[3px]'>Projects</h6>
            <h2 className='text-center font-bold text-4xl leading-[50px]'>Discover the latest Interior Design <br /> available today</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 mt-20 mx-14">
                {
                    homeProjects.map(project => <Project
                        key={project._id}
                        project={project}
                    ></Project>)
                }
            </div>
        </div>
    );
};

export default HomeProjects;