import './App.css'
import Mainbody from './Body/Mainbody';
import Banner from './Componants/Banner/Banner';
import Navbar from './Componants/Navbar/Navbar';

const userData = async () =>{
  const res = await fetch('/Data.json');
  return res.json();
};

const userPromise = userData();
// console.log(userPromise);


function App() {

  return (
    <>
      <Navbar userPromise={userPromise}></Navbar>
      <Banner userPromise={userPromise}></Banner>
      <Mainbody userPromise={userPromise}></Mainbody>
    </>
  )
}

export default App
