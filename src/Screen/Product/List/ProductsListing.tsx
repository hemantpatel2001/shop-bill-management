import { useNavigate } from "react-router-dom";
import Skeleton from "../../Customer/TableSkeleton/Skeleton";


type Props = {
  data: any,
  isLoading: boolean,
  isError: boolean,
  HandleEdit: (id: string) => void,
  HandleDelete: (id: string) => void
}

const ProductsListing = ({ data, isLoading, isError, HandleEdit, HandleDelete }: Props) => {
  const navigate=useNavigate()

  if (isLoading) return <div className='max-w-4xl mx-auto p-6 mt-16 bg-white rounded-md shadow-md'><Skeleton/></div>;
  if (isError) return <div className="flex justify-center text-sky-800 text-4xl p-44">Error fetching product</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 mt-16 bg-white rounded-md shadow-md">
  <div className="flex justify-between items-center mb-4">
                    <h1 className="text-3xl font-bold text-gray-700">Product's</h1>
                    <button 
                        className="text-white rounded-lg h-10 bg-yellow-500 hover:bg-yellow-600 transition-all p-2"
                        onClick={() => navigate("/shop-bill-management/add-Product")}
                    >
                        ADD NEW Product
                    </button>
                </div>

      <div className="overflow-auto max-h-[400px]">
        <table className="min-w-full bg-white table-auto">
          <thead className="bg-gray-100 sticky top-0 z-10 text-center">
            <tr>
              <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-base  text-gray-700">Product Name</th>
              <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-base  text-gray-700">Product Code</th>
              <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-base  text-gray-700">Cost Price</th>
              <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-base  text-gray-700">MRP</th>
              <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-base  text-gray-700">Selling Price</th>
              <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-base  text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.slice().reverse().map((product) => (
              <tr key={product._id}>
                <td className="px-4 py-3 whitespace-no-wrap border-b text-base text-gray-800">{product.productName}</td>
                <td className="px-4 py-3 whitespace-no-wrap border-b text-base text-gray-800">{product.productCode}</td>
                <td className="px-4 py-3 whitespace-no-wrap border-b text-base text-gray-800">{product.costPrice}</td>
                <td className="px-4 py-3 whitespace-no-wrap border-b text-base text-gray-800">{product.MRP}</td>
                <td className="px-4 py-3 whitespace-no-wrap border-b text-base text-gray-800">{product.sellingPrice}</td>
                <td className="px-2 py- whitespace-no-wrap border-b text-base text-gray-800">
                  <button
                    onClick={() => HandleEdit(product._id)}
                    className="px-3 py-1 bg-blue-500 text-white rounded-md mr-2 hover:bg-blue-600 transition-all"
                  >
                EDIT
                  </button>
                  <button
                    onClick={() => HandleDelete(product._id)}
                    className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all"
                  >
                   DELETE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsListing;
