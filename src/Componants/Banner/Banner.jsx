import React from 'react';

const Banner = () => {
    return (
        <div className="w-7/12 mx-auto">
            <div className="w-full flex justify-between items-center gap-2 mt-5 mb-5 sm:flex-col md:flex-row">
                <div className=" w-7/12 gap-1  p-7 rounded-xl flex items-center justify-center sm:flex-col md: flex-row bg-[url('/vector1.png'),_linear-gradient(to_right,#632ee3,#965af0)] bg-no-repeat">
                    <h1 className="text-2xl font-bold p-2">In-Progress</h1>
                    <h1 className="text-7xl font-bold">0</h1>
                </div>
                <div className=" w-7/12 gap-1 p-7 rounded-xl flex items-center justify-center sm:flex-col md: flex-row bg-[url('/vector1.png'),_linear-gradient(to_right,#54cf68,#01827b)] bg-no-repeat" >
                    <h1 className="text-2xl font-bold p-2">Resolved</h1>
                    <h1 className="text-7xl font-bold">0</h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;