import React, { Suspense } from 'react';
import Navbar from './Componants/Navbar';
import Mainbody from './Componants/Mainbody';

const fetchTicket = async () =>{
  const res = await fetch('/Data.json');
  if(!res.ok){Error("There is a problem purching data.")};
  return res.json();
}

const ticketPromise = fetchTicket();



const App = () => {
  const handleClick = () =>{
        console.log("Clicked");
    }
  return (
    <>
      <Navbar handleClick={handleClick}></Navbar>
      <Suspense fallback={<span className="loading loading-infinity loading-xl mx-auto absolute top-[50%] left-[50%] transform translate-y-[-50%, -50%] w-[100px] h-[100px]"></span>}>
        <Mainbody ticketPromise={ticketPromise} handleClick={handleClick}></Mainbody>
      </Suspense>
    </>
  );
};

export default App;