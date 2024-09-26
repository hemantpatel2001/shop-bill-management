

import { useNavigate } from "react-router-dom";
import TableCategorySkeleton from "../categorySkeleton/skeletonCategory";

type Props = {
  data: any,
  isLoading: boolean,
  isError: boolean,
  HandleDelete: (id: string) => void,
  HandleEdit: (id: string) => void
}

const CategoryList = ({ isLoading, isError, HandleDelete, HandleEdit, data }: Props) => {
  const navigate = useNavigate();

  if (isLoading) 
    return (
      <div className='max-w-4xl mx-auto p-6 mt-16 bg-white rounded-md shadow-md'>
        <TableCategorySkeleton />
      </div>
    );

  if (isError) 
    return <div className="flex justify-center text-sky-800 text-4xl p-44">Error fetching categories</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 mt-16 bg-white rounded-md shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-gray-800">Category Details</h1>
        <button
          className="text-white rounded-lg h-10 mr-4 bg-green-500 hover:bg-green-200 transition-all p-2"
          onClick={() => {
            navigate("/shop-bill-management/add-category")
          }}
        >
          Add Category
        </button>
      </div>

      <div className="overflow-auto max-h-[430px]">
        <table className="w-full bg-white">
          <thead className=" bg-gray-100 sticky top-0 z-10 text-center">
            <tr>
              <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-base font-semibold text-gray-700">Category Name</th>
              <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-base font-semibold text-gray-700 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.slice().reverse().map((category) => (
              <tr key={category._id} className="hover:bg-gray-50 transition duration-200 items-center">
                <td className="px-4 py-3 whitespace-no-wrap border-b text-base text-gray-800">{category.name}</td>
                <td className="px-4 py-3 whitespace-no-wrap border-b text-base text-gray-800 text-center">
                  <button
                    onClick={() => HandleEdit(category._id)}
                    className="px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => HandleDelete(category._id)}
                    className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all"
                  >
                    Delete
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

export default CategoryList;
