import { useNavigate } from "react-router-dom";
import TableCategorySkeleton from "../categorySkeleton/skeletonCategory";
import { FaEdit } from "react-icons/fa";

type Props = {
  data: any,
  isLoading: boolean,
  isError: boolean,
  HandleDelete: (id: string) => void,
  HandleEdit: (id: string) => void
}

const CategoryList = ({ isLoading, isError, HandleEdit, data }: Props) => {
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className='max-w-full lg:max-w-4xl  mx-auto p-4 sm:p-6 md:p-8 mt-16  shadow-md'>
        <TableCategorySkeleton />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center text-red-600 text-2xl sm:text-3xl md:text-4xl p-10 sm:p-20 md:p-44">
        Error fetching categories
      </div>
    );
  }

  return (
    <div className="max-w-[330px] lg:max-m-full mt-24 p-4   lg:max-w-4xl  lg:mt-10 mx-auto  sm:p-6 md:p-8 :mt-12 border bg-white rounded-md shadow-md">
      <div className="flex flex-row justify-between items-center mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-gray-800">Categories</h1>
        <button
          className="text-sm  sm:text-base md:text-lg lg:text-xl text-white bg-green-500 hover:bg-green-600 transition-all duration-300 p-2 rounded-lg mt-4 sm:mt-0"
          onClick={() => navigate("/shop-bill-management/add-category")}
        >
          ADD NEW
        </button>
      </div>

      <div className="overflow-auto max-w-full max-h-[430px]">
        <table className="w-full bg-white">
          <thead className="bg-gray-100 sticky top-0   sm:text-lg md:text-xl lg:text-xl ">
            <tr className="text-left">
              <th className="px-2 sm:px-4 py-2 border-b-2 border-gray-300 font-semibold text-gray-700">Category name</th>
              <th className="px-2 sm:px-4 py-2 border-b-2 border-gray-300 font-semibold text-gray-700 ">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.slice().reverse().map((category:any) => (
              <tr key={category._id} className="hover:bg-gray-50 transition duration-200  ">
                <td className="px-2 sm:px-4 py-3 text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-800">{category.categoryName}</td>
                <td className="px-2 sm:px-4 py-3 text-sm sm:text-lg md:text-xl lg:text-2xl ">
                  <button
                    onClick={() => HandleEdit(category._id)}
                    className="px-2 py-1 sm:px-4 sm:py-2 text-blue-500 rounded-md text-3xl hover:text-blue-300 transition-all duration-200 mr-2"
                  >
                    <FaEdit />
                  </button>
                  {/* Uncomment the delete button if needed */}
                  {/* <button
                    onClick={() => HandleDelete(category._id)}
                    className="px-2 py-1 sm:px-4 sm:py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all duration-200"
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

export default CategoryList;
