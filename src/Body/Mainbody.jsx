import React, { use, useState } from 'react';
import Bodycard from './Bodycard';
// import Noticeboard from './Noticeboard';

const Mainbody = ({userPromise}) => {
    const userData = use(userPromise);
    const [pendingState, setPendingState] = useState([]);
    const [finishedTask, setFinishedTask] = useState([]);
    // console.log(userData)
    return (
      <div className="md:w-7/12 mx-auto border-2 border-red-500 flex gap-8 sm:w-full">
          <Bodycard user={userData} pendingState={pendingState} setPendingState={setPendingState} finishedTask={finishedTask} setFinishedTask={setFinishedTask}></Bodycard>
          {/* <Noticeboard user={userData} pendingState={pendingState} setPendingState={setPendingState} finishedTask={finishedTask} setFinishedTask={setFinishedTask}></Noticeboard> */}
      </div>
    );
};

export default Mainbody;