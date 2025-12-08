import React from 'react';
import '../App.css';

const Footer = () => {
    return (
        <div className="bg-black mt-2">
            <div className="max-w-[75%] h-[400px]  mx-auto flex items-center">
                <div className="footer-container flex justify-between items-center sd:flex-col ml-15">
                    <div className="description w-[270px] h-[200px]">
                        <h1 className="font-bold m-1">CS — Ticket System</h1>
                        <p className="text-[11px] ml-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae necessitatibus doloremque veniam ut velit modi dicta consectetur perspiciatis reprehenderit ex ad voluptatibus ipsa quibusdam nesciunt sed nihil in illum eum eaque nisi, nostrum molestias provident repellat omnis. Saepe, eligendi animi.</p>
                    </div>
                    <div className="w-[270px] h-[200px]">
                        <h1 className="font-bold m-1">Company</h1>
                        <ul className="ml-1 text-[11px]">
                            <li className='mb-1'>About us</li>
                            <li className='mb-1'>Our Mission</li>
                            <li className='mb-1'>Contact Saled</li>
                        </ul>
                    </div>
                    <div className="w-[270px] h-[200px]">
                        <h1 className="font-bold m-1">Services</h1>
                        <ul className="ml-1 text-[11px]">
                            <li className='mb-1'>Products & Services</li>
                            <li className='mb-1'>Customer Stories</li>
                            <li className='mb-1'>Download Apps</li>
                        </ul>
                    </div>
                    <div className="w-[270px] h-[200px]">
                        <h1 className="font-bold m-1">Information</h1>
                        <ul className="ml-1 text-[11px]">
                            <li className='mb-1'>Privacy Policy</li>
                            <li className='mb-1'>Terms & Condition</li>
                            <li className='mb-1'>Join Us</li>
                        </ul>
                    </div>
                    <div className="w-[270px] h-[200px]">
                        <h1 className="font-bold m-1">Social Links</h1>
                        <ul className="ml-1 text-[11px]">
                            <li className='mb-1'>About us</li>
                            <li className='mb-1'>Our Mission</li>
                            <li className='mb-1'>Contact Saled</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="copyright mx-auto max-w-full text-center h-10 shadow-gray-400">
                    <h1 className="p-1">© 2025 CS — Ticket System. All rights reserved.</h1>
            </div>
        </div>
    );
};

export default Footer;