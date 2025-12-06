import React from 'react';

const Noticeboard = ({user}) => {
    return (
        <div className="w-4/12 border-2 border-blue-500">
            <div>
                <h1 className="text-[19px] text-black font-bold p-2">Task Status</h1>
                
            </div>
            <div>
                <h1 className="text-[19px] text-black font-bold p-2">Resolved Task</h1>
            </div>
            
        </div>
    );
};

export default Noticeboard;