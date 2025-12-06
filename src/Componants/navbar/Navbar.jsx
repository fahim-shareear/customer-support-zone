import React from 'react';

const Navbar = () => {
    return (
      <div>
        <div className="navbar w-8/12 mx-auto shadow-sm bg-white">
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
            <a className="btn bg-[linear-gradient(to_right,_#6e38e6,_#9f62f2)]"><span>+</span>New Ticket</a>
          </div>
        </div>
      </div>
    );
};

export default Navbar;