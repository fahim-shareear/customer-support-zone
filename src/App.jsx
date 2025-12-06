import { Suspense, useState } from 'react';
import './App.css'
import Mainbody from './Componants/Mainbody/Mainbody';
import Navbar from './Componants/navbar/Navbar';


const fetchData = async () =>{
  const res = await fetch('/Data.json');
  return res.json();
};

const userData = fetchData();


function App() {
  const [getData, setGetData] = useState([]);
  const [nextData, setNextData] = useState([]);

  return (
    <>
      <Navbar setGetData={setGetData} userData={userData} getData={getData}></Navbar>
      <Suspense fallback={<span className="loading loading-infinity loading-xl spinner"></span>}>
          <Mainbody userData={userData} getData={getData} nextData={nextData} setNextData={setNextData} setGetData={setGetData}></Mainbody>
      </Suspense>
    </>
  )
}

export default App
