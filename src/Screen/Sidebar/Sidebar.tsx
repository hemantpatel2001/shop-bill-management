import { AiFillProduct } from 'react-icons/ai';
import { BiLogOutCircle, BiSolidCategory } from 'react-icons/bi';
import { BsPeopleFill } from 'react-icons/bs';
import { FaFileInvoiceDollar, FaRegArrowAltCircleLeft } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';
import { PiHandshakeBold } from 'react-icons/pi';
import { TbTransactionRupee } from 'react-icons/tb';
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
            <div className="p-4 cursor-pointer font-semibold  hover:text-red-600">
                <Link to="dashboard" onClick={toggleSidebar}>
                    <span className='flex  items-center gap-1'> <MdDashboard/>    <span className='flex items-center gap-2'>Dashboard</span></span>
                </Link>
            </div>
            <hr className='border-0.5 border-gray-800' />
            <div className="p-4 cursor-pointer hover:text-red-600  font-semibold">
                <Link to="customer-details" onClick={toggleSidebar}>
                    <span className='flex  items-center gap-1'> <BsPeopleFill />  <span className='flex items-center gap-2'> Customers</span></span>
                </Link>
            </div>
            <hr className='border-0.5 border-gray-800' />
            <div className="p-4 cursor-pointer hover:text-red-600 font-semibold">
                <Link to="category-details" onClick={toggleSidebar}>
                    <span className='flex  items-center gap-1'> <BiSolidCategory />  <span className='flex items-center gap-2'>Category</span> </span>
                </Link>
            </div>
            <hr className='border-0.5 border-gray-800' />
            <div className="p-4 cursor-pointer hover:text-red-600 font-semibold">
                <Link to="vendors-details" onClick={toggleSidebar}>
                    <span className='flex  items-center gap-1'>  <PiHandshakeBold />       <span className='flex items-center gap-2'>Vendor</span></span>
                </Link>
            </div>
            <hr className='border-0.5 border-gray-800' />
            <div className="p-4 cursor-pointer hover:text-red-600  font-semibold">
                <Link to="product-details" onClick={toggleSidebar}>
                    <span className='flex  items-center gap-1'>   <AiFillProduct />    <span className='flex items-center gap-2'>Product</span> </span>
                </Link>
            </div>
            <hr className='border-0.5 border-gray-800' />
            <div className="p-4 cursor-pointer hover:text-red-600  font-semibold">
                <Link to="invoice-details" onClick={toggleSidebar}>
                    <span className='flex  items-center gap-1'>     <FaFileInvoiceDollar />  <span className='flex items-center gap-2'>Invoice</span> </span>
                </Link>
            </div>
            <hr className='border-0.5 border-gray-800' />
            <div className="p-4 cursor-pointer hover:text-red-600  font-semibold">
                <Link to="transaction" onClick={toggleSidebar}>
                    <span className='flex  items-center gap-1'>    <TbTransactionRupee />    <span className='flex items-center gap-2'>Transaction</span></span>
                </Link>
            </div>
            <hr className='border-0.5 border-gray-800 ' />
            <div className="p-4 cur:text-red-500  font-semibold  hover:text-red-600">
                <span className='flex items-center gap-2'> <BiLogOutCircle />        <button onClick={HandleLogout}>Logout</button>

                </span>
            </div>
        </div>
    );
};

export default Sidebar;
