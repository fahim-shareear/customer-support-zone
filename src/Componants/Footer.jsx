import React from 'react';
import '../App.css';

const Footer = () => {
    return (
        <div className="bg-black mt-2 text-white">
            <div className="max-w-[90%] mx-auto py-10 flex flex-col sm:flex-row flex-wrap justify-between gap-5">
                
                <div className="w-full sm:w-[270px]">
                    <h1 className="font-bold mb-2">CS — Ticket System</h1>
                    <p className="text-[11px]">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Beatae necessitatibus doloremque veniam ut velit modi dicta 
                        consectetur perspiciatis reprehenderit ex ad voluptatibus 
                        ipsa quibusdam nesciunt sed nihil in illum eum eaque nisi, 
                        nostrum molestias provident repellat omnis. Saepe, eligendi animi.
                    </p>
                </div>

                <div className="w-full sm:w-[270px]">
                    <h1 className="font-bold mb-2">Company</h1>
                    <ul className="text-[11px]">
                        <li className='mb-1'>About us</li>
                        <li className='mb-1'>Our Mission</li>
                        <li className='mb-1'>Contact Sales</li>
                    </ul>
                </div>

                <div className="w-full sm:w-[270px]">
                    <h1 className="font-bold mb-2">Services</h1>
                    <ul className="text-[11px]">
                        <li className='mb-1'>Products & Services</li>
                        <li className='mb-1'>Customer Stories</li>
                        <li className='mb-1'>Download Apps</li>
                    </ul>
                </div>

                <div className="w-full sm:w-[270px]">
                    <h1 className="font-bold mb-2">Information</h1>
                    <ul className="text-[11px]">
                        <li className='mb-1'>Privacy Policy</li>
                        <li className='mb-1'>Terms & Condition</li>
                        <li className='mb-1'>Join Us</li>
                    </ul>
                </div>

                <div className="w-full sm:w-[270px]">
                    <h1 className="font-bold mb-2">Social Links</h1>
                    <ul className="text-[11px]">
                        <li className='mb-1'>Facebook</li>
                        <li className='mb-1'>Twitter</li>
                        <li className='mb-1'>LinkedIn</li>
                    </ul>
                </div>

            </div>

            <div className="text-center py-3 border-t border-gray-700 text-[12px]">
                © 2025 CS — Ticket System. All rights reserved.
            </div>
        </div>
    );
};

export default Footer;
