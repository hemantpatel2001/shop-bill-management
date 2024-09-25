import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import CustomerListingWrapper from '../Customer/List/CustomerListingWrapper';



const Layout = () => {
  return (
    <div className="flex h-screen">

      <Sidebar />
        
        <div className="flex-1 bg-gray-200  " >
       
        <Outlet  />
      </div>


    </div>
  );
}

export default Layout;


