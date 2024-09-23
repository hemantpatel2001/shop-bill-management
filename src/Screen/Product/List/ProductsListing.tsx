type Props = {
  data: any,
  isLoading: boolean,
  isError: boolean

}

const ProductsListing= ({ data, isLoading, isError }: Props) => {

  if (isLoading) return <div className='flex justify-center text-sky-800 text-4xl p-44'>Loading...</div>;
  if (isError) return <div className="flex justify-center text-sky-800 text-4xl p-44">Error fetching product</div>;

      return (

          <div className="max-w-4xl mx-auto p-6 mt-16 bg-white rounded-md shadow-md">
              <h1 className="text-2xl font-bold mb-4 text-center">Product Details</h1>

              <div className="overflow-auto max-h-[500px]">
                  <table className="min-w-full bg-white table-auto">
                      <thead>
                          <tr>
                              <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">Name</th>
                              <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">Email</th>
                              <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">Mobile</th>
                              <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">City</th>
                              <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">Actions</th>
                          </tr>
                      </thead>
                      <tbody>
                          {data?.data?.slice().reverse().map((product) => (
                              <tr key={product._id}>
                                  <td className="px-4 py-3 whitespace-no-wrap border-b text-sm text-gray-700">{product.name}</td>
                                  <td className="px-4 py-3 whitespace-no-wrap border-b text-sm text-gray-700">{product.email}</td>
                                  <td className="px-4 py-3 whitespace-no-wrap border-b text-sm text-gray-700">{product.mobile}</td>
                                  <td className="px-4 py-3 whitespace-no-wrap border-b text-sm text-gray-700">{product.city}</td>
                                  <td className="px-4 py-3 whitespace-no-wrap border-b text-sm text-gray-700">
                                      <button
                                          onClick={() => HandleEdit(product._id)}
                                          className="px-2 py-1 bg-blue-500 text-white rounded-md mr-2"
                                      >
                                          Edit
                                      </button>
                                      <button
                                          onClick={() => HandleDelete(product._id)}
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

export default ProductsListing
