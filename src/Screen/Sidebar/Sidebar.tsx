import { useNavigate, Link } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();

    const HandleLogout = () => {
        localStorage.clear();
        navigate("/");
    };

    return (
        <div className="w-64 h-screen bg-gray-300 text-black shadow-lg text-2xl flex flex-col pl-8 gap-2">
            <div className="p-4 cursor-pointer">
                <img className="w-28 h-32" src="https://salescrm.aarohiweblogger.com/assets/img/brand/logo.png" alt="Aarohi sales" />
            </div>

            {/* Customer */}
            <div className="p-4 cursor-pointer hover:bg-blue-700 font-semibold">
                <Link to="customer-details">
                    Customer
                </Link>
            </div>

            {/* Category */}
            <div className="p-4 cursor-pointer hover:bg-blue-700 font-semibold">
                <Link to="category-details">
                    Category
                </Link>
            </div>
            
            {/* Products */}
            <div className="p-4 cursor-pointer hover:bg-blue-700 font-semibold">
                <Link to="vendors-details">
                  Vendor
                </Link>
            </div>

            {/* Products */}
            <div className="p-4 cursor-pointer hover:bg-blue-700 font-semibold">
                <Link to="product-details">
                    Products
                </Link>
            </div>

            {/* Invoice */}
            <div className="p-4 cursor-pointer hover:bg-blue-700 font-semibold">
                <Link to="invoice-history">
                    Invoice
                </Link>
            </div>

            {/* Logout */}
            <div className="p-4 cursor-pointer hover:bg-blue-700 font-semibold">
                <button onClick={HandleLogout}>Logout</button>
            </div>
        </div>
    );
};

export default Sidebar;
