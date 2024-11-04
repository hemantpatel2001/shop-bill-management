
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div
                className={`fixed h-full z-10 text-white transition-transform duration-150 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    } md:translate-x-0 w-50`}
            >
                <Sidebar toggleSidebar={toggleSidebar} />
            </div>

            {/* Main content area */}
            <div className="flex-1 overflow-y-auto  fixed top-0 right-0 left-0 ">
                <Header toggleSidebar={toggleSidebar} />
                <div className="ml-0 md:ml-[90px] transition-all duration-300 ease-in-out">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layout;
