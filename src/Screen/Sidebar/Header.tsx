import React from 'react';

import { GiHamburgerMenu } from 'react-icons/gi';

const Header = ({ toggleSidebar }) => {
    return (
        <header className="flex items-center justify-between p-4 md:hidden bg-gray-800 text-white z-20">
            <button 
                className="text-4xl rounded-md md:hidden"
                onClick={toggleSidebar}
            >
                <GiHamburgerMenu />
            </button>
            <h1 className="text-2xl ">Shop bill managament</h1>
        </header>
    );
};

export default Header;
