import { Link, useNavigate } from "react-router-dom";
import Skeleton from "../TableSkeleton/Skeleton";
import { FaEdit } from "react-icons/fa";

type Props = {
    data: any,
    isLoading: boolean,
    isError: boolean,
    HandleDelete: (id: string) => void,
    HandleEdit: (id: string) => void
}

const CustomerListing = ({ data, isLoading, isError, HandleEdit, HandleDelete }: Props) => {
    const navigate = useNavigate();
    console.log(data);

    if (isLoading) return <div className='md:max-w-4xl max-w-2xl mx-auto p-6 mt-16 bg-white rounded-md shadow-md'><Skeleton /></div>;
    if (isError) return <div className="flex justify-center text-sky-800 text-4xl p-44">Error fetching customers</div>;

    return (
        <div className="max-w-5xl mx-auto p-6 mt-24 sm:mt-14 md:mt-14 border rounded-md shadow-md">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-4xl font-bold text-gray-800">Customer's</h1>
                <button 
                    className="text-white rounded-md md:mr-10 bg-green-500 font-bold hover:bg-green-400 transition-all p-4"
                    onClick={() => navigate("/shop-bill-management/add-customer")}
                >
                    ADD NEW
                </button>
            </div>

    
            <div className="overflow-x-auto max-h-[400px]">
                <table className="min-w-full bg-white table-auto">
                    <thead className="bg-gray-100 text-2xl sticky top-0 text-center">
                        <tr>
                            <th className="px-4 py-2 border-b-2 border-gray-300 text-left font-semibold text-gray-700">Name</th>
                            <th className="px-4 py-2 border-b-2 border-gray-300 text-left font-semibold text-gray-700">Email</th>
                            <th className="px-4 py-2 border-b-2 border-gray-300 text-left font-semibold text-gray-700">Mobile</th>
                            <th className="px-4 py-2 border-b-2 border-gray-300 text-left font-semibold text-gray-700">City</th>
                            <th className="px-4 py-2 border-b-2 border-gray-300 text-left font-semibold text-gray-700">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.data?.slice().reverse().map((customer) => (
                            <tr key={customer._id} className="hover:bg-gray-50 text-xl transition-all">
                                <td className="px-4 py-3 border-b text-gray-800">{customer.name}</td>
                                <td className="px-4 py-3 border-b text-gray-800">{customer.email}</td>
                                <td className="px-4 py-3 border-b text-gray-800">{customer.mobile}</td>
                                <td className="px-4 py-3 border-b text-gray-800">{customer.city}</td>
                                <td className="px-4 py-3 border-b text-gray-800 flex gap-2">
                                    <button
                                        onClick={() => HandleEdit(customer._id)}
                                        className="px-2 py-1 text-3xl text-blue-500 rounded-md hover:bg-blue-600 transition-all"
                                    >
                             <FaEdit />
                                    </button>
                                    {/* Uncomment if delete functionality is required */}
                                    {/* <button
                                        onClick={() => HandleDelete(customer._id)}
                                        className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all"
                                    >
                                        DELETE
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

export default CustomerListing;
