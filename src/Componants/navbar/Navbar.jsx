import React from 'react';

const Navbar = ({getData,userData}) => {
    return (
      <div className='w-full '>
        <div className="navbar md:w-9/12 sm:w-full mx-auto  bg-white">
          <div className="navbar-start">
            <div className="dropdown">
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li><a>Home</a></li>
                <li><a>FAQ</a></li>
                <li><a>Changelog</a></li>
                <li><a>Blog</a></li>
                <li><a>Download</a></li>
                <li><a>Contact</a></li>
              </ul>
            </div>
            <a className="text-xl p-2 text-black font-bold">CS — Ticket System</a>
          </div>
          <div className="navbar-end">
            <ul className="flex justify-end items-center gap-10 text-black mr-4 font-medium cursor-pointer">
              <li><a>Home</a></li>
              <li><a>FAQ</a></li>
              <li><a>Changelog</a></li>
              <li><a>Blog</a></li>
              <li><a>Download</a></li>
              <li><a>Contact</a></li>
            </ul>
            <a className="btn bg-[linear-gradient(to_right,_#6e38e6,_#9f62f2)] border-0"><span>+</span>New Ticket</a>
          </div>
        </div>
        <div className="md:w-9/12 mx-auto">
            <div className="mx-auto flex items-center justify-between gap-2 m-3">
                <div className="md:w-7/12 bg-[linear-gradient(#642fe3,#985cf0)] rounded-md flex items-center flex-col">
                    <div className="text-center p-10">
                        <h1 className="text-3xl">In-Progress</h1>
                        <h1 className="text-6xl font-bold">0</h1>
                    </div>
                </div>
                <div className="md:w-7/12 bg-[linear-gradient(#54cf68,#0f8f77)] rounded-md flex items-center flex-col">
                    <div className="text-center p-10">
                        <h1 className="text-3xl">Resolved</h1>
                        <h1 className="text-6xl font-bold">0</h1>
                    </div>
                </div>
            </div>
        </div>
      </div>
      
    );
};

export default Navbar;