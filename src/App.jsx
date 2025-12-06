import { Suspense } from 'react';
import './App.css'
import Mainbody from './Componants/Mainbody/Mainbody';
import Navbar from './Componants/navbar/Navbar';


const fetchData = async () =>{
  const res = await fetch('/Data.json');
  return res.json();
};

const userData = fetchData();

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback={<span className="loading loading-infinity loading-xl spinner"></span>}>
          <Mainbody userData={userData}></Mainbody>
      </Suspense>
    </>
  )
}

export default App
