import React from 'react';

import { GiHamburgerMenu } from 'react-icons/gi';

const Header = ({ toggleSidebar }) => {
    return (
        <header className="flex items-center justify-between p-4  bg-gray-700 text-white z-20">
            <button 
                className="text-4xl  rounded-md "
                onClick={toggleSidebar}
            >
                <GiHamburgerMenu />
            </button>
            <h1 className="text-5xl bg-clip-text text-transparent bg-gradient-to-r   font-extrabold from-white via-gray-300 to-gray-200">
  Shop Bill Management
</h1>

        </header>
    );
};

export default Header;
