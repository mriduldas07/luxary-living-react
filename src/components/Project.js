import React from 'react';
import locationIcon from '../Icon/location.png';

const Project = ({ project }) => {
    const { projectName, location, img } = project;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} className='max-h-80' alt="Shoes" /></figure>
            <div className="my-5">
                <h1 className="text-center font-semibold text-xl py-3">{projectName}</h1>
                <div className="flex justify-center items-center">
                    <img className='w-[18px] h-[20px] mr-2' src={locationIcon} alt="" />
                    {location}
                </div>
            </div>
        </div>
    );
};

export default Project;