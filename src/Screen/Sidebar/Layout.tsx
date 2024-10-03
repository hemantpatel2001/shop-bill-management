// import { Outlet } from 'react-router-dom';
// import Sidebar from './Sidebar';
// import CustomerListingWrapper from '../Customer/List/CustomerListingWrapper';



// const Layout = () => {
//   return (
//     <div className="flex   h-screen ">

//       <Sidebar />
        
//         <div className=" flex-1 " >
       
//         <Outlet  />
//       </div>


//     </div>
//   );
// }

// export default Layout;


import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar remains fixed */}
      <Sidebar className="fixed h-full" />

      {/* Scrollable content in Outlet */}
      <div className="flex-1 ml-[60px] overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
