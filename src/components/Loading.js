import React from 'react';
import ReactLoading from 'react-loading';

const Loading = ({ type, color }) => {
    return (
        <ReactLoading type={'spinningBubbles'} color={'bg - primary'}></ReactLoading>
    );
};

export default Loading;