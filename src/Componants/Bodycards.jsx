import React from 'react';

const Bodycards = ({data, handleClick}) => {
    
    return (
        <div className=" max-h-[200px] bg-white rounded-md shadow-xl hover:scale-50 transition-all transform cursor-pointer" onClick={() => {handleClick()}}>
            <div className="flex justify-between items-center">
                <h1 className="text-[12px] text-black font-medium p-1">{data.title}</h1>
                <div className="flex items-center bg-green-300 rounded-[15px] mr-1 mt-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 ml-1"></span>
                    <p className="text-[10px] text-green-700 p-1 mr-1">{data.status}</p>
                </div>
            </div>
            <div>
                <p className="text-gray-500 text-[13px] text-wrap p-1 m-1">{data.description}</p>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex max-w[50%] items-center justify-between gap-3 ml-3">
                    <p className="text-[10px] text-gray-500">{data.id}</p>
                    <p className="text-[11px] font-bold uppercase text-black">{data.priority}</p>
                </div>
                <div className="flex max-w[50%] items-center justify-between gap-3 mr-3">
                    <p className="text-[11px] text-gray-500 capitalize">{data.createdBy}</p>
                    <p className="text-[11px] font-bold uppercase text-black">{data.createdAt}</p>
                </div>
            </div>
        </div>
    );
};

export default Bodycards;