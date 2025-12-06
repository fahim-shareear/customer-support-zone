import React, { use } from 'react';
// import Cards from '../Cards/Cards';

const Mainbody = ({userData}) => {
    const jsonData = use(userData);
    // console.log(jsonData);
    // console.log(jsonData)
    return (
        <div className="md:w-9/12 mx-auto">
            <div className="mx-auto flex items-center justify-between gap-2 m-3">
                <div className="md:w-7/12 bg-[linear-gradient(#642fe3,#985cf0)] rounded-md flex items-center flex-col">
                    <div className="text-center p-10">
                        <h1 className="text-3xl">In-Progress</h1>
                        <h1 className="text-6xl font-bold">{jsonData.length}</h1>
                    </div>
                </div>
                <div className="md:w-7/12 bg-[linear-gradient(#54cf68,#0f8f77)] rounded-md flex items-center flex-col">
                    <div className="text-center p-10">
                        <h1 className="text-3xl">Resolved</h1>
                        <h1 className="text-6xl font-bold">{jsonData.length}</h1>
                    </div>
                </div>
            </div>
            <div className="border-2 border-green-600 flex justify-between items-center">
                <h1 className="text-black font-bold text-2xl">Customers Tickets</h1>
                <div>right</div>
            </div>
        </div>
    );
};

export default Mainbody;