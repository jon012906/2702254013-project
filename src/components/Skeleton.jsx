import React from 'react';

const Skeleton = ({ type }) => {
    const classes = {
        text: 'h-6 bg-gray-200 mb-2 w-full',
        title: 'h-6 bg-gray-200 mb-2 w-3/4',
        image: 'h-32 bg-gray-200 mb-4 w-full'
    };

    return <div className={`${classes[type]} animate-pulse`}></div>;
};

export default Skeleton;