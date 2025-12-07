// src/App.jsx
import './App.css';
import Navbar from './Componants/Navbar';

const fetchData = async () => {
  const res = await fetch('/Data.json');
  return res.json();
};
const ticketsPromise = fetchData();

function App() {
  return (
    <>
      <Navbar ticketsPromise={ticketsPromise} />
    </>
  );
}

export default App;