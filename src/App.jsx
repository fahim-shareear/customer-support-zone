import React from 'react';
import Navbar from './Componants/Navbar';
import Mainbody from './Componants/Mainbody';

const fetchTicket = async () =>{
  const res = await fetch('/Data.json');
  if(!res.ok){Error("There is a problem purching data.")};
  return res.json();
}

const ticketPromise = fetchTicket();

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Mainbody ticketPromise={ticketPromise}></Mainbody>
    </>
  );
};

export default App;