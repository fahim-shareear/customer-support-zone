import React, { use } from 'react';
import Bodycard from './Bodycard';

const Mainbody = ({userPromise}) => {
    const userData = use(userPromise);
    // console.log(userData)
    return (
      <div className="md:w-7/12 mx-auto border-2 border-red-500 flex gap-8 sm:w-full">
          <Bodycard user={userData}></Bodycard>
      </div>
    );
};

export default Mainbody;