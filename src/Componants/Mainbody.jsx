import React, { use } from 'react';
import Bodycards from './Bodycards';

const Mainbody = ({ticketPromise}) => {
    const getData = use(ticketPromise);
    return (
        <div className="border-2 border-red-500 max-w-[60%] mx-auto">
            <div className="grid grid-cols-12 mx-auto border-2 border-blue-500 items-center">
                <div className="bg-red-500 col-span-8 ">
                    <h1 className="text-black font-bold ml-1">Customer Tickets</h1>
                    <div className="ml-2 grid md:grid-cols-2 gap-2  sm:grid-cols-1 p-4">
                        {
                            getData.map(data => <Bodycards data={data} key={data.id}></Bodycards>)
                        }
                    </div>
                </div>
                <div className="border-2 col-span-4 border-yellow-500 bg-green-500 h-full">
                    
                </div>
            </div>
        </div>
    );
};

export default Mainbody;