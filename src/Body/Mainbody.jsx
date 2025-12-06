import React, { use } from 'react';
import Bodycard from './Bodycard';

const Mainbody = ({userPromise}) => {
    const userData = use(userPromise);
    // console.log(userData)
    return (
      <div className="md:w-7/12 mx-auto border-2 border-red-500 flex gap-8 sm:w-full">
          <Bodycard user={userData}></Bodycard>
        <div className="md:w-3/12 border-2 border-blue-500">right</div>
      </div>
    );
};

export default Mainbody;