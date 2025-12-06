import React from 'react';

const Card = ({u}) => {
    return (
        <div className="mb-1 shadow">
            <div className="md:w-full h-full bg-white p-2 rounded-sm shadow-md">
                <div className="flex justify-between items-center">
                    <h1 className="text-black font-medium text-[12px]">{u.title}</h1>
                    <div className='flex justify-between items-center bg-green-600 rounded-[15px]'>
                        <span className="w-[13px] h-[13px] rounded-full m-1 bg-green-400"></span>
                        <h3 className="text-black font-medium text-[13px] p-2">{u.status}</h3>
                    </div>
                </div>
                <div className="mt-3">
                    <h3 className="text-[13px] text-gray-500 font-medium">{u.description}</h3>
                </div>
                <div className="flex justify-between items-center mt-2">
                    <div className="flex justify-between items-center gap-1">
                        <h4 className="text-[10px] text-gray-500">{u.id}</h4>
                        <h4 className="text-[13px] uppercase text-black">{u.priority}</h4>
                    </div>
                    <div className="flex justify-between items-center gap-1">
                        <h2 className="text-[13px] text-black uppercase">{u.createdBy}</h2>
                        <h2 className="text-[13px] text-black uppercase">{u.createdAt}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;