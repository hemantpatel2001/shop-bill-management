import { useNavigate } from "react-router-dom";
import Skeleton from "../../Customer/TableSkeleton/Skeleton";
import { BiEdit } from "react-icons/bi";

type Props = {
  data: any,
  isLoading: boolean,
  isError: boolean,
  HandleEdit: (id: string) => void,
  HandleDelete?: (id: string) => void
}

const ProductsListing = ({ data, isLoading, isError, HandleEdit, HandleDelete }: Props) => {
  const navigate = useNavigate()

  if (isLoading) return (
    <div className='max-w-full lg:max-w-4xl mx-auto p-4 sm:p-6 md:p-8 mt-16 bg-white rounded-md shadow-md'>
      <Skeleton />
    </div>
  );

  if (isError) return (
    <div className="flex justify-center text-red-600 text-2xl sm:text-3xl md:text-4xl p-10 sm:p-20 md:p-44">
      Error fetching products
    </div>
  );

  return (
    <div className=" max-w-[340px] mt-24 md:mt-10 md:max-w-full lg:max-w-6xl border mx-auto p-2 sm:p-6 md:p-8  bg-white rounded-md shadow-md">
      <div className="flex flex-row w-[300px]  md:w-auto justify-between items-center mb-6">
        <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl mt-2 font-bold text-gray-700">Products</h1>
        <button
          className="text-sm  md:text-lg lg:text-xl text-white bg-green-500 hover:bg-green-600 transition-all duration-300 p-2 rounded-lg mt-2 "
          onClick={() => navigate("/shop-bill-management/add-Product")}
        >
          ADD NEW
        </button>
      </div>

      <div className="overflow-auto max-h-[400px]">
        <table className="w-full bg-white table-auto  border-gray-300 rounded-lg">
          <thead className="bg-gray-100 sticky  top-0 sm:text-lg md:text-xl lg:text-xl ">
            <tr className="text-left">
              <th className="px-4 py-2 border-b-2 border-gray-300 font-semibold text-gray-700">Product Name</th>
              <th className="px-4 py-2 border-b-2 border-gray-300 font-semibold text-gray-700">Product Code</th>
              <th className="px-4 py-2 border-b-2 border-gray-300 font-semibold text-gray-700">Category</th>
              <th className="px-4 py-2 border-b-2 border-gray-300 font-semibold text-gray-700">Cost Price</th>
              <th className="px-4 py-2 border-b-2 border-gray-300 font-semibold text-gray-700">MRP</th>
              <th className="px-4 py-2 border-b-2 border-gray-300 font-semibold text-gray-700">Selling Price</th>
              <th className="px-4 py-2 border-b-2 border-gray-300 font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.slice().reverse().map((product) => (
              <tr key={product._id} className="hover:bg-gray-50 transition duration-100 ">
                <td className="px-4 py-3 text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-800">{product.productName}</td>
                <td className="px-4 py-3 text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-800">{product.productCode}</td>
                <td className="px-4 py-3 text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-800">{product.categoryId?.name}</td>
                <td className="px-4 py-3 text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-800">{product.costPrice}</td>
                <td className="px-4 py-3 text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-800">{product.MRP}</td>
                <td className="px-4 py-3 text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-800">{product.sellingPrice}</td>
                <td className="px-2 py-3 text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-800 flex justify-center">
                  <button
                    onClick={() => HandleEdit(product._id)}
                    className="px-2 py-1 sm:px-4 sm:py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-200 mr-2"
                  >
                      <BiEdit />
                  </button>
                  {/* <button
                    onClick={() => HandleDelete(product._id)}
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
        <span className="text-gray-600 text-sm md:text-base">Total Products: {data?.data?.length}</span>
      </div>
    </div>
  );
};

export default ProductsListing;
