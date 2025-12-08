import React from 'react';
import vector1 from '../Assets/vector1.png';
import vector2 from '../Assets/vector2.png';

const Navbar = ({ countProgress, resolvedCount }) => {
  return (
    <div>
      <div className="bg-white">
        <div className="navbar max-w-[75%] mx-auto bg-white">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li><a>Home</a></li>
                <li><a>FAQ</a></li>
                <li><a>Changelog</a></li>
                <li><a>Blog</a></li>
                <li><a>Download</a></li>
                <li><a>Contact</a></li>
              </ul>
            </div>
            <a className="text-black text-xl font-bold">CS — Ticket System</a>
          </div>

          <div className="navbar-end">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 text-black">
                <li><a>Home</a></li>
                <li><a>FAQ</a></li>
                <li><a>Changelog</a></li>
                <li><a>Blog</a></li>
                <li><a>Download</a></li>
                <li><a>Contact</a></li>
              </ul>
            </div>
            <a className="btn text-white bg-linear-to-r from-purple-700 to-purple-600 border-none hover:shadow-x1 transition transform hover:scale-105">
              + New Ticket
            </a>
          </div>
        </div>
      </div>

      {/* Banner Section */}
      <div className="top-50">
        <div className="md:max-w-[75%] mx-auto p-3 grid md:grid-cols-2 gap-3">

          <div className="left flex items-center justify-between md:max-w-[600px] sm:max-w-full rounded-xl shadow-xl h-[260px] md:m-5 bg-linear-to-r from-purple-900 to-purple-600 md:ml-15">
              <img src={vector1} alt="" className="h-full w-[210px]"/>
              <div className="h-auto text-center ">
                <h1 className="text-2xl">In Progress</h1>
                <h1 className="text-6xl mx-auto">{countProgress}</h1>
              </div>
              <img src={vector2} alt="" className="h-full w-[210px] -rotate-y-180"/>
          </div>
          
          <div className="left flex items-center justify-between md:max-w-[600px] sm:max-w-full rounded-xl shadow-xl h-[260px] md:m-5 bg-linear-to-r from-green-400 to-green-700 md:ml-15">
              <img src={vector1} alt="" className="h-full w-[210px]"/>
              <div className="h-auto text-center ">
                <h1 className="text-2xl">Resolved</h1>
                <h1 className="text-6xl mx-auto">{resolvedCount}</h1>
              </div>
              <img src={vector2} alt="" className="h-full w-[210px] -rotate-y-180"/>
          </div>

          {/* <div className="right md:max-w-[600px] sm:w-full rounded-xl shadow-xl h-[260px] md:m-5  text-center flex items-center flex-col gap-3 justify-center">
            <div>
              <h1 className="text-2xl">Resolved</h1>
              <h1 className="text-6xl">{}</h1>
            </div>
          </div> */}

        </div>
      </div>
    </div>
  );
};

export default Navbar;
