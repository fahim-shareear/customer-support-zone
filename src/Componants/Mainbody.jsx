import React, { use } from 'react';
import Bodycards from './Bodycards';

const Mainbody = ({ticketPromise}) => {
    const getData = use(ticketPromise);
    return (
        <div className="max-w-[60%] mx-auto">
            <div className="grid grid-cols-12 mx-auto border-2 border-blue-500 items-center">
                
                {/* Left Section */}
                <div className="bg-red-500 col-span-8 ">
                    <h1 className="text-black font-bold ml-1">Customer Tickets</h1>
                    <div className="ml-2 grid md:grid-cols-2 gap-2  sm:grid-cols-1 p-4">
                        {
                            getData.map(data => <Bodycards data={data} key={data.id}></Bodycards>)
                        }
                    </div>
                </div>

                {/* Right Section (Fixed Layout) */}
                <div className="border-2 col-span-4 bg-green-500 h-full flex flex-col justify-start gap-4">
                    
                    <div className="mx-auto rounded-xl w-[95%] md:h-[95%] sm:h-full sd:w-[100%] overflow-auto">
                        <h1 className="text-black font-bold">Task Status</h1>
                        <div className="w-[90%] h-[300px] ml-5 rounded-xl shadow-md">
                        </div>
                    </div>

                    <div className="mx-auto rounded-xl w-[95%] md:h-[95%] sm:h-full sd:w-[100%] overflow-auto">
                        <h1 className="text-black font-bold">Resolved Status</h1>
                        <div className="w-[90%] h-[300px] ml-5 rounded-xl shadow-md">
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Mainbody;
