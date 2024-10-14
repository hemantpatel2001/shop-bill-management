import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

import { CiMenuKebab } from 'react-icons/ci';
import { IoMdClose } from 'react-icons/io';

const Layout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div
                className={`fixed h-full text-white transition-transform duration-150 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    } md:translate-x-0 w-60 md:w-60 z-10`}
            >
                <Sidebar toggleSidebar={toggleSidebar} />
            </div>

            {/* Toggle button for mobile screens */}
            <div className=" ">
                <button 
                    className="absolute top-4 left-4 text-4xl z-20 text-black p-2 rounded-md md:hidden"
                    onClick={toggleSidebar}
                >
                    {isSidebarOpen ? <IoMdClose className='ml-36 bg-transparent' /> : <CiMenuKebab />}
                </button></div>


            {/* Main content area */}
            <div
                className="flex-1 ml-0 md:ml-[60px] overflow-y-auto transition-all duration-300 ease-in-out"
            >
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
