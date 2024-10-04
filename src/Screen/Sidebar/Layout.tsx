
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div
                className={`fixed h-full bg-gray-800 text-white transition-transform duration-300 ease-in-out ${
                    isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } md:translate-x-0 w-60 md:w-60 z-10`}
            >
                <Sidebar toggleSidebar={toggleSidebar} /> {/* Pass the toggleSidebar function here */}
            </div>

            {/* Toggle button for mobile screens */}
            <button
                className="absolute top-4 left-4 text-2xl z-20 text-white bg-blue-600 p-2 rounded-md md:hidden"
                onClick={toggleSidebar}
            >
                {isSidebarOpen ? '✕' : '☰'}
            </button>

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
