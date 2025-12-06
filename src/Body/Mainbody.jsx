import React, { use } from 'react';
import Bodycard from './Bodycard';
import Noticeboard from './Noticeboard';

const Mainbody = ({userPromise}) => {
    const userData = use(userPromise);
    // console.log(userData)
    return (
      <div className="md:w-7/12 mx-auto border-2 border-red-500 flex gap-8 sm:w-full">
          <Bodycard user={userData}></Bodycard>
          <Noticeboard user={userData}></Noticeboard>
      </div>
    );
};

export default Mainbody;