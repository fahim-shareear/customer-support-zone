import React, { use } from 'react';
import Bodycards from './Bodycards';
import Pendingtasks from './Pendingtasks';
import Resolvedtask from './Resolvedtask';

const Mainbody = ({ ticketPromise, handleClick }) => {
  const getData = use(ticketPromise);

  return (
    <div className="max-w-[60%] mx-auto">
      <div className="grid grid-cols-12 mx-auto items-center">

        {/* Left Section */}
        <div className="col-span-8">
          <h1 className="text-black font-bold ml-1">Customer Tickets</h1>
          <div className="ml-2 grid md:grid-cols-2 gap-2 sm:grid-cols-1 p-4">
            {getData.map(data => (
              <Bodycards data={data} key={data.id} handleClick={handleClick} />
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="col-span-4 h-full flex flex-col justify-start gap-4">
          <div className="mx-auto rounded-xl w-[95%] md:h-[95%] sm:h-full sd:w-[100%] mt-2">
            <h1 className="text-black font-bold">Task Status</h1>
            <div className="w-[90%] h-[350px] ml-5 rounded-xl shadow-md overflow-auto">
              {getData.map(user => (
                <Pendingtasks user={user} key={user.id} />
              ))}
            </div>
          </div>

          <div className="mx-auto rounded-xl w-[95%] md:h-[95%] sm:h-full sd:w-[100%] mt-2">
            <h1 className="text-black font-bold">Resolved Status</h1>
            <div className="w-[90%] h-[350px] ml-5 rounded-xl shadow-md overflow-auto">
              {getData.map(user => (
                <Resolvedtask key={user.id} user={user} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Mainbody;
