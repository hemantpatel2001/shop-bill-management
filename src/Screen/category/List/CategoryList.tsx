import { useNavigate } from "react-router-dom";




const data = [
  { categoryName: "sell",_id:1 }, { categoryName: "weight macine 25kg", _id:2 }
]




type Props = {
  data: any,
  isLoading: boolean,
  isError: boolean
}

const CategoryList = ({ isLoading, isError, HandleDelete, HandleEdit }: Props) => {
  const navigate = useNavigate()

  if (isLoading) return <div className='flex justify-center text-sky-800 text-4xl p-44'>Loading...</div>;
  if (isError) return <div className="flex justify-center text-sky-800 text-4xl p-44">Error fetching customers</div>;

  return (

    <div className="max-w-2xl mx-auto p-4 mt-16 bg-white rounded-md shadow-md flex flex-col justify-around">
      <span className="flex justify-between h-16 "> <h1 className="text-2xl font-bold mb-4 text-center">Category details</h1>
        <button className="mr-[100px]  text-amber-1000  rounded-lg h-10 text-lg bg-yellow-400  border  pb-1 pl-1 pr-1 pt-1" onClick={() => {
          navigate("/shop-bill-management/add-category")
        }}>Add category</button></span>

      <div className="overflow-auto max-h-[500px] max-w-3xl">
        <table className="min-w-full bg-white table-auto ">
          <thead className=" ">
            <tr>
              <th className="px-4 py-2 border-b-2  text-2xl border-gray-300 text-left font-semibold text-gray-600"> Category name</th>

              <th className="px-4 py-2 border-b-2 text-2xl  border-gray-300 text-left  font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((category) => (
              <tr key={category._id}>
                <td className="px-4 py-3 whitespace-no-wrap border-b text-xl text-gray-700">{category.categoryName}</td>

                <td className="px-4 py-3 whitespace-no-wrap border-b text-xl text-gray-700">
                  <button
                    onClick={() => HandleEdit(category._id)}
                    className="px-2 py-1 bg-blue-500 text-white rounded-md mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => HandleDelete(category._id)}
                    className="px-2 py-1 bg-red-500 text-white rounded-md"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )


            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategoryList;
