import { useNavigate } from "react-router-dom";
import Skeleton from "../../Customer/TableSkeleton/Skeleton";
import { BiEdit } from "react-icons/bi";

type Props = {
  data: any;
  isLoading: boolean;
  isError: boolean;
  HandleDelete: (id: string) => void;
  HandleEdit: (id: string) => void;
};

const VendorListing = ({ data, isLoading, isError, HandleDelete, HandleEdit }: Props) => {
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className='max-w-[300px]  md:max-w-full lg:max-w-4xl mx-auto p-4 sm:p-6 md:p-8 mt-16 bg-white rounded-md shadow-md'>
        <Skeleton />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center  items-center text-red-600 text-2xl sm:text-3xl md:text-4xl p-10 sm:p-20 md:p-44">
        Error fetching vendor's data
      </div>
    );
  }

  return (
    <div className="max-w-[350px] lg:max-w-7xl border mx-auto p-2 sm:p-6 md:p-8 md:mt-8  mt-28 rounded-md shadow-md">
      <div className="flex flex-row  md:w-auto w-[320px] justify-between items-baseline mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-gray-700">Vendors</h1>
        <button
          className="text-sm sm:text-base md:text-lg lg:text-xl text-white bg-green-500 hover:bg-green-600 transition-all duration-300 p-2 rounded-lg mt-4 sm:mt-0"
          onClick={() => navigate("/shop-bill-management/add-vendor")}
        >
          ADD NEW 
        </button>
      </div>

      <div className="overflow-auto max-h-[400px]">
        <table className="w-full bg-white table-auto border-gray-300 rounded-lg">
          <thead className="bg-gray-100 sticky top-0 sm:text-lg md:text-xl lg:text-xl  ">
            <tr>
              <th className="px-4 py-2 border-b-2 border-gray-300 font-semibold text-gray-700">Name</th>
              <th className="px-4 py-2 border-b-2 border-gray-300 font-semibold text-gray-700">Email</th>
              <th className="px-4 py-2 border-b-2 border-gray-300 font-semibold text-gray-700">Mobile</th>
              <th className="px-4 py-2 border-b-2 border-gray-300 font-semibold text-gray-700">Address</th>
              <th className="px-4 py-2 border-b-2 border-gray-300 font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.slice().reverse().map((vendor: any) => (
              <tr key={vendor._id} className="hover:bg-gray-50 transition  text-xl duration-100  ">
                <td className="px-4 py-3 text-sm sm:text-lg md:text-xl text-gray-800">{vendor.name}</td>
                <td className="px-4 py-3 text-sm sm:text-lg md:text-xl text-gray-800">{vendor.email}</td>
                <td className="px-4 py-3 text-sm sm:text-lg md:text-xl  text-gray-800">{vendor.mobile}</td>
                <td className="px-4 py-3 text-sm sm:text-lg md:text-xl  text-gray-800">{vendor.address}</td>
                <td className="px-2 py-3 text-sm sm:text-lg md:text-xl  text-gray-800 flex justify-center">
                  <button
                    onClick={() => HandleEdit(vendor._id)}
                    className="px-2 py-1 sm:px-4 sm:py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-200 mr-2"
                  >
                    <BiEdit />
                  </button>
                  {/* Uncomment to add delete functionality */}
                  {/* <button
                    onClick={() => HandleDelete(vendor._id)}
                    className="px-2 py-1 sm:px-4 sm:py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all duration-200"
                  >
                    DELETE
                  </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4">
        <span className="text-gray-600 text-sm md:text-base">Total Vendors: {data?.data?.length}</span>
      </div>
    </div>
  );
};

export default VendorListing;
