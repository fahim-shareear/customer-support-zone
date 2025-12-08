import React, { use, useState } from 'react';
import Bodycards from './Bodycards';
import Pendingtasks from './Pendingtasks';
import Resolvedtask from './Resolvedtask';

const Mainbody = ({ ticketPromise, handleClick, progressCard, handleDecrease, setResolvedCount}) => {
  const getData = use(ticketPromise);
  const handleResolvedCount = () =>{
    setResolvedCount(prev => prev + 1);
  };

  const [pendingTasks, setPendingTasks] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);

  const handleTaskAdd = (task) => {
    if (!pendingTasks.find(t => t.id === task.id) && !resolvedTasks.find(t => t.id === task.id)) {
      setPendingTasks(prev => [...prev, task]);
    }
  };

  const handleCompleteTask = (task) => {
    setPendingTasks(prev => prev.filter(t => t.id !== task.id));
    setResolvedTasks(prev => [...prev, task]);
    handleDecrease();
  };

  return (
    <div className="max-w-[60%] mx-auto">
      <div className="grid grid-cols-12 mx-auto items-center">

        <div className="col-span-8">
          <h1 className="text-black font-bold ml-1">Customer Tickets</h1>
          <div className="ml-2 grid md:grid-cols-2 gap-2 sm:grid-cols-1 p-4">
            {getData.map(data => (
              <Bodycards 
                data={data} 
                key={data.id} 
                handleClick={handleClick} 
                progressCard={progressCard} 
                handleTaskAdd={handleTaskAdd}
              />
            ))}
          </div>
        </div>

        <div className="col-span-4 h-full flex flex-col justify-start gap-4">
          <div className="mx-auto rounded-xl w-[95%] md:h-[95%] sm:h-full sd:w-[100%] mt-2">
            <h1 className="text-black font-bold">Task Status</h1>
            <div className="w-[90%] h-[350px] ml-5 rounded-xl shadow-md overflow-auto">
              {pendingTasks.length === 0 ? (
                <p className="text-gray-400 p-2">No tasks in progress</p>
              ) : (
                pendingTasks.map(task => (
                  <Pendingtasks 
                    user={task} 
                    key={task.id} 
                    onComplete={() => handleCompleteTask(task)}
                    handleResolvedCount={handleResolvedCount}
                  />
                ))
              )}
            </div>
          </div>

          <div className="mx-auto rounded-xl w-[95%] md:h-[95%] sm:h-full sd:w-[100%] mt-2">
            <h1 className="text-black font-bold">Resolved Status</h1>
            <div className="w-[90%] h-[350px] ml-5 rounded-xl shadow-md overflow-auto">
              {resolvedTasks.length === 0 ? (
                <p className="text-gray-400 p-2">No tasks resolved yet</p>
              ) : (
                resolvedTasks.map(task => (
                  <Resolvedtask key={task.id} user={task} />
                ))
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Mainbody;
