import React from 'react';

const SkeletonCard: React.FC = () => {
    return (
        <div className="animate-pulse flex flex-col items-center justify-center border p-4 m-2 bg-gray-200 w-[18rem] h-[28rem] relative rounded-[25px] custom:border">
            <div className="bg-gray-300 h-28 w-full rounded mb-2"></div>
        </div>
    );
};

export default SkeletonCard;
