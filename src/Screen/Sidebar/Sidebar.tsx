
import { FaFileInvoiceDollar, FaUserFriends } from 'react-icons/fa';
import { FaWeightScale } from 'react-icons/fa6';
import { IoLogOut } from 'react-icons/io5';
import { MdBusinessCenter, MdCategory } from 'react-icons/md';
import { useNavigate, Link } from 'react-router-dom';

type SidebarProps = {
    toggleSidebar: () => void; 
};

const Sidebar = ({ toggleSidebar }: SidebarProps) => {
    const navigate = useNavigate();

    const HandleLogout = () => {
        localStorage.clear();
        navigate("/");
    };

    return (
        <div className="w-[175px] h-screen bg-gray-300 text-gray-800 shadow-lg text-2xl flex flex-col pl-8 gap-2">
            <div className="p-4 mt-4 cursor-pointer">
                <img className="w-28 h-32" src="https://salescrm.aarohiweblogger.com/assets/img/brand/logo.png" alt="Aarohi sales" />
            </div>

            {/* Customer */}
            <div className="p-4 cursor-pointer hover:bg-blue-700 font-semibold">
                <Link to="customer-details" onClick={toggleSidebar}>
                    <span className='flex items-center gap-2'><FaUserFriends /> Customers</span>
                </Link>
            </div>
          < hr   className='border-0.5 border-gray-800'/>
            {/* Category */}
            <div className="p-4 cursor-pointer hover:bg-blue-700 font-semibold">
                <Link to="category-details" onClick={toggleSidebar}>
                    <span className='flex items-center gap-2'> < MdCategory />   Category</span>

                </Link>
            </div>
            < hr   className='border-0.5 border-gray-800'/>

            {/* Vendor */}
            <div className="p-4 cursor-pointer hover:bg-blue-700 font-semibold">
                <Link to="vendors-details" onClick={toggleSidebar}>
                    <span className='flex items-center gap-2'> <MdBusinessCenter />  Vendor</span>
                </Link>
            </div>
            < hr   className='border-0.5 border-gray-800'/>
            {/* Invoice */}
            {/* Products */}
            <div className="p-4 cursor-pointer hover:bg-blue-700 font-semibold">
                <Link to="product-details" onClick={toggleSidebar}>
                    <span className='flex items-center gap-2'>  <FaWeightScale />   Product</span>

                </Link>
            </div>
            < hr   className='border-0.5 border-gray-800'/>
            <div className="p-4 cursor-pointer hover:bg-blue-700 font-semibold">
                <Link to="invoice-details" onClick={toggleSidebar}>
                    <span className='flex items-center gap-2'>  <FaFileInvoiceDollar />Invoice</span>

                </Link>
            </div>
            < hr   className='border-0.5 border-gray-800'/>
            {/* Logout */}
            <div className="p-4 cursor-pointer hover:bg-blue-700 font-semibold">
                <span className='flex items-center gap-2'> <IoLogOut />
                    <button onClick={HandleLogout}>  Logout</button></span>

            </div>
        </div>
    );
};

export default Sidebar;
