import React, { use } from 'react';
import Bodycards from './Bodycards';

const Mainbody = ({ticketPromise}) => {
    const getData = use(ticketPromise);
    return (
        <div className="border-2 border-red-500 grid">
            <div className="md:max-w-[75%] mx-auto border-2 border-blue-500">
                <div className="bg-red-500 md:max-w-[75%]">
                    <h1 className="text-black font-bold ml-1">Customer Tickets</h1>
                    <div className="ml-2 grid md:grid-cols-2 gap-2  sm:grid-cols-1 max-w-[60%] p-4">
                        {
                            getData.map(data => <Bodycards data={data} key={data.id}></Bodycards>)
                        }
                    </div>
                </div>
                <div className="border-2 border-yellow-500 bg-green-500 md:max-w-[25%] h-full">

                </div>
            </div>
        </div>
    );
};

export default Mainbody;