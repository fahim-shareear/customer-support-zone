import React from 'react';

const Bodycards = ({u}) => {
    
    const handleClick = () =>{
        console.log("Clicked")
    }

    
    return (
        <div onClick={() =>{handleClick()}}>
            <div className="card-container bg-white rounded-2xl cursor-pointer">
                <div className="card_body m-3">
                    <div className="title flex justify-between items-center">
                        <h1 className="text-black font-medium">{u.title}</h1>
                        <div className="flex items-center bg-green-300 rounded-[15px] p-1 mt-2">
                            <span className="w-[13px] h-[13px] rounded-full bg-green-600 m-1"></span>
                            <h2 className="text-green-700 capitalize text-[12px] mr-2">{u.status}</h2>
                        </div>
                    </div>
                    <div className="text-gray-500 text-wrap mr-2 text-[12px]">
                        <p>{u.description}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex justify-between items-center gap-5 p-2">
                            <h3 className="text-black font-bold">{u.id}</h3>
                            <h3 className="text-black font-bold uppercase">{u.priority}</h3>
                        </div>
                        <div className="flex justify-between items-center gap-5 p-2">
                            <h3 className="text-black font-bold capitalize">{u.createdBy}</h3>
                            <h3 className="text-black font-bold">{u.createdAt}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bodycards;