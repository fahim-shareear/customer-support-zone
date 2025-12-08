import React, { Suspense, useState } from 'react';
import Navbar from './Componants/Navbar';
import Mainbody from './Componants/Mainbody';
import Footer from './Componants/Footer';
import { ToastContainer, toast } from 'react-toastify';

const fetchTicket = async () => {
  const res = await fetch('/Data.json');
  if (!res.ok) {
    throw Error("There is a problem fetching data.");
  }
  return res.json();
};

const ticketPromise = fetchTicket();

const App = () => {
  const [countProgress, setCountProgress] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);

  const handleClick = () => {
    setCountProgress(prev => prev + 1);
  };

  const handleDecrease = () =>{
    setCountProgress(prev => (prev > 0 ? prev - 1 : 0) )
    toast("Issue Resolved")
  }

  return (
    <>
      <Navbar countProgress={countProgress} resolvedCount={resolvedCount}/>
      <Suspense
        fallback={
          <span className="loading loading-infinity loading-xl mx-auto absolute top-[50%] left-[50%] transform translate-y-[-50%, -50%] w-[100px] h-[100px]"></span>
        }>
        <Mainbody
          ticketPromise={ticketPromise}
          handleClick={handleClick}
          countProgress={countProgress}
          setCountProgress={setCountProgress}
          handleDecrease={handleDecrease}
          resolvedCount={resolvedCount}
          setResolvedCount={setResolvedCount}
        />
      </Suspense>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
};

export default App;
