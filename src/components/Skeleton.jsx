import React from 'react';

const Skeleton = () => {
    return (
        <div className="animate-pulse bg-gray-300 h-48 w-full rounded-lg">
            <div className="bg-gray-400 h-24 w-full mb-4 rounded-t-lg"></div>
            <div className="px-4 py-2">
                <div className="h-4 bg-gray-400 rounded mb-2"></div>
                <div className="h-4 bg-gray-400 rounded w-3/4"></div>
            </div>
        </div>
    );
  };

export default Skeleton;