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
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800">Vendor's</h1>
        <button
          className="text-white rounded-lg h-10 bg-green-500 hover:bg-green-600 transition-all px-4 py-2 font-medium"
          onClick={() => navigate("/shop-bill-management/add-vendore")}
        >
          Add New Vendor
        </button>
      </div>

      <div className="overflow-x-auto max-h-[400px]">
        <table className="min-w-full bg-white table-auto border-collapse">
          <thead className="bg-gray-100 sticky top-0 z-10 text-center">
            <tr>
              <th className="px-4 py-2 border-b border-gray-300 text-left text-base font-semibold text-gray-700">
                Name
              </th>
              <th className="px-4 py-2 border-b border-gray-300 text-left text-base font-semibold text-gray-700">
                Email
              </th>
              <th className="px-4 py-2 border-b border-gray-300 text-left text-base font-semibold text-gray-700">
                Mobile
              </th>
              <th className="px-4 py-2 border-b border-gray-300 text-left text-base font-semibold text-gray-700">
                Address
              </th>
              <th className="px-4 py-2 border-b border-gray-300 text-left text-base font-semibold text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.slice().reverse().map((vendor: any) => (
              <tr key={vendor._id} className="hover:bg-gray-50 transition">
                <td className="px-4 py-3 border-b border-gray-300 text-base text-gray-800">
                  {vendor.name}
                </td>
                <td className="px-4 py-3 border-b border-gray-300 text-base text-gray-800">
                  {vendor.email}
                </td>
                <td className="px-4 py-3 border-b border-gray-300 text-base text-gray-800">
                  {vendor.mobile}
                </td>
                <td className="px-4 py-3 border-b border-gray-300 text-base text-gray-800">
                  {vendor.address}
                </td>
                <td className="px-4 py-3 border-b border-gray-300 text-base text-gray-800">
                  <button
                    onClick={() => HandleEdit(vendor._id)}
                    className="px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all mr-2"
                  >
                    Edit
                  </button>
                  {/* <button
                    onClick={() => HandleDelete(vendor._id)}
                    className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all"
                  >
                    Delete
                  </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VendorListing;
// 