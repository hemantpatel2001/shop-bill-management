import React from "react";

const TableCategorySkeleton = () => {
  return (

       <div className="">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-gray-800"></h1>
        <button
          className="text-white rounded-lg h-10 mr-4transition-all p-2"
          
        >
         
        </button>
      </div>

      <table className="w-full  flex flex-col justify-center items-center">
        <thead className="sticky top-0 bg-gray-100">
          <tr>
            <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-base font-semibold text-gray-600">
              <div className="h-6 bg-gray-300 rounded animate-pulse "></div>
            </th>
            <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-base font-semibold text-gray-600">
              <div className="h-6 bg-gray-300 rounded animate-pulse w-1/4"></div>
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Simulating multiple rows */}
          {[...Array(5)].map((_, index) => (
            <tr key={index}>
              <td className="px-4 py-3 whitespace-no-wrap border-b">
                <div className="h-6 bg-gray-300 rounded animate-pulse w-1/3"></div>
              </td>
              <td className="px-4 py-3 whitespace-no-wrap border-b text-center">
                <div className="flex justify-center space-x-2">
                  <div className="w-12 h-6 bg-gray-300 rounded animate-pulse"></div>
                  <div className="w-12 h-6 bg-gray-300 rounded animate-pulse"></div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableCategorySkeleton;
