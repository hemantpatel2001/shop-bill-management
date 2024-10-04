import { useNavigate } from "react-router-dom";
import Skeleton from "../../Customer/TableSkeleton/Skeleton";

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
      <div className="max-w-4xl mx-auto p-6 mt-16 bg-white rounded-md shadow-md">
        <Skeleton />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center text-red-600 text-2xl p-20 bg-red-100 rounded-lg shadow-lg">
        Error fetching vendor's data
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 mt-16 bg-white rounded-md shadow-md">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800">Vendors</h1>
        <button
          className="mt-4 md:mt-0 text-white rounded-lg bg-green-500 hover:bg-green-600 transition-all px-4 py-2 font-medium"
          onClick={() => navigate("/shop-bill-management/add-vendore")}
        >
          Add New Vendor
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white table-auto border border-gray-300 rounded-lg">
          <thead className="bg-gray-100 sticky top-0 text-center">
            <tr>
              <th className="px-2 py-2 sm:px-4 sm:py-3 border-b border-gray-300 text-left text-xs sm:text-sm md:text-base font-semibold text-gray-700">Name</th>
              <th className="px-2 py-2 sm:px-4 sm:py-3 border-b border-gray-300 text-left text-xs sm:text-sm md:text-base font-semibold text-gray-700">Email</th>
              <th className="px-2 py-2 sm:px-4 sm:py-3 border-b border-gray-300 text-left text-xs sm:text-sm md:text-base font-semibold text-gray-700">Mobile</th>
              <th className="px-2 py-2 sm:px-4 sm:py-3 border-b border-gray-300 text-left text-xs sm:text-sm md:text-base font-semibold text-gray-700">Address</th>
              <th className="px-2 py-2 sm:px-4 sm:py-3 border-b border-gray-300 text-left text-xs sm:text-sm md:text-base font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.slice().reverse().map((vendor: any) => (
              <tr key={vendor._id} className="hover:bg-gray-50 transition">
                <td className="px-2 py-3 sm:px-4 border-b border-gray-300 text-xs sm:text-sm md:text-base text-gray-800">{vendor.name}</td>
                <td className="px-2 py-3 sm:px-4 border-b border-gray-300 text-xs sm:text-sm md:text-base text-gray-800">{vendor.email}</td>
                <td className="px-2 py-3 sm:px-4 border-b border-gray-300 text-xs sm:text-sm md:text-base text-gray-800">{vendor.mobile}</td>
                <td className="px-2 py-3 sm:px-4 border-b border-gray-300 text-xs sm:text-sm md:text-base text-gray-800">{vendor.address}</td>
                <td className="px-2 py-3 sm:px-4 border-b border-gray-300 text-xs sm:text-sm md:text-base text-gray-800 flex justify-center space-x-2">
                  <button
                    onClick={() => HandleEdit(vendor._id)}
                    className="px-2 sm:px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => HandleDelete(vendor._id)}
                    className="px-2 sm:px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer for additional options, can be used for pagination or additional actions */}
      <div className="flex justify-between items-center mt-4">
        <span className="text-gray-600 text-sm md:text-base">Total Vendors: {data?.data?.length}</span>
      </div>
    </div>
  );
};

export default VendorListing;
