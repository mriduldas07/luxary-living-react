import React from 'react';

const CommonBtn = ({ children, width, marginTop, onClick }) => {
    return (
        <div className={`bg-primary rounded font-medium text-white py-2.5 flex justify-center items-center cursor-pointer`} style={{ width: `${width}px`, marginTop: `${marginTop}px` }} onClick={onClick}>
            {children}
        </div>
    );
};

export default CommonBtn;