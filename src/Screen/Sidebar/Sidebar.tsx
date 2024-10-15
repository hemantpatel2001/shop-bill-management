import React from 'react';
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { RiCloseCircleFill } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = ({ toggleSidebar }) => {

    const navigate = useNavigate();

    const HandleLogout = () => {
        localStorage.clear();
        navigate("/");
    };
    return (
        <div className="w-[230px] h-screen bg-gray-300 text-gray-800 shadow-lg text-2xl flex flex-col pl-8 gap-2">
            {/* Close Button */}
            <div className="flex justify-between items-center p-4 md:hidden">
              
                <button className="text-gray-800 " onClick={toggleSidebar}>
                    <FaRegArrowAltCircleLeft className='text-3xl ml-32' />
                </button>
            </div>

            <div className="p-2  cursor-pointer">
                <img className="w-28 h-32" src="https://salescrm.aarohiweblogger.com/assets/img/brand/logo.png" alt="Aarohi sales" />
            </div>

            {/* Navigation Links */}
            <div className="p-4 cursor-pointer hover:bg-blue-700 font-semibold">
                <Link to="customer-details" onClick={toggleSidebar}>
                    <span className='flex items-center gap-2'>Customers</span>
                </Link>
            </div>
            <hr className='border-0.5 border-gray-800' />
            <div className="p-4 cursor-pointer hover:bg-blue-700 font-semibold">
                <Link to="category-details" onClick={toggleSidebar}>
                    <span className='flex items-center gap-2'>Category</span>
                </Link>
            </div>
            <hr className='border-0.5 border-gray-800' />
            <div className="p-4 cursor-pointer hover:bg-blue-700 font-semibold">
                <Link to="vendors-details" onClick={toggleSidebar}>
                    <span className='flex items-center gap-2'>Vendor</span>
                </Link>
            </div>
            <hr className='border-0.5 border-gray-800' />
            <div className="p-4 cursor-pointer hover:bg-blue-700 font-semibold">
                <Link to="product-details" onClick={toggleSidebar}>
                    <span className='flex items-center gap-2'>Product</span>
                </Link>
            </div>
            <hr className='border-0.5 border-gray-800' />
            <div className="p-4 cursor-pointer hover:bg-blue-700 font-semibold">
                <Link to="invoice-details" onClick={toggleSidebar}>
                    <span className='flex items-center gap-2'>Invoice</span>
                </Link>
            </div>
            <hr className='border-0.5 border-gray-800' />
            <div className="p-4 cursor-pointer hover:bg-blue-700 font-semibold">
                <span className='flex items-center gap-2'>
                    <button onClick={HandleLogout}>Logout</button>
                </span>
            </div>
        </div>
    );
};

export default Sidebar;
