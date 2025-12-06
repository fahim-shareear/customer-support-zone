import './App.css'
import Mainbody from './Componants/Mainbody/Mainbody';
import Navbar from './Componants/navbar/Navbar';

const userData = async () =>{
  const res = await fetch('/Data.json');
  return res.json();
};

const userPromise = userData()
console.log(userPromise);



function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <Mainbody userPromise={userPromise}></Mainbody>
    </>
  )
}

export default App
