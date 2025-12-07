import React, { use } from 'react';
import Bodycards from './Bodycards';
const Mainbody = ({userData, getData, nextData, setNextData, setGetData} ) => {
    const user = use(userData);
    
    return (
        <div className="md:max-w-9/12 mx-auto rounded-2xl p-4 shadow relative">
           <div className="md:w-[1000px]">
                <h1 className="text-black font-bold">Customer Tickets</h1>
            <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-3">
                {
                    user.map(u => <Bodycards key={u.id} u={u} getData={getData} setNextData={setNextData} nextData={nextData} setGetData={setGetData}></Bodycards>)
                }
            </div>
           </div>
           <div className="md:w-[400px] h-full border-2 border-blue-500 absolute right-0 top-4">
                <h2 className="text-black font-bold">Task Status</h2>
                <div>
                    
                </div>
           </div>
        </div>
    );
};

export default Mainbody;