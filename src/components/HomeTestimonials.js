import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Testimonials from './Testimonials';

const HomeTestimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/homeTestimonials')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [testimonials])
    return (
        <div className='bg-[#F7F7F7] h-[650px] mt-[110px] flex justify-center items-center flex-col'>
            <h1 className="text-center font-bold text-[34px] pb-[60px]">Testimonials</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px] ">
                {
                    testimonials.map(testimonial => <Testimonials
                        key={testimonial._id}
                        testimonial={testimonial}
                    ></Testimonials>)
                }
            </div>
        </div>
    );
};

export default HomeTestimonials;