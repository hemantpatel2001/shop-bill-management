

    import { Link, useNavigate } from "react-router-dom";
    import Skeleton from "../TableSkeleton/Skeleton";

    type Props = {
        data: any,
        isLoading: boolean,
        isError: boolean,
        HandleDelete: (id: string) => void,
        HandleEdit: (id: string) => void
    }

    const CustomerListing = ({ data, isLoading, isError, HandleDelete, HandleEdit }: Props) => {
        const navigate = useNavigate()
        console.log(data);
        

        if (isLoading) return <div className=' max-w-4xl mx-auto p-6 mt-16 bg-white rounded-md shadow-md'><Skeleton/></div>;
        if (isError) return <div className="flex justify-center text-sky-800 text-4xl p-44">Error fetching customers</div>;

        return (
            <div className="max-w-4xl mx-auto p-6 mt-16 bg-white rounded-md shadow-md">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-3xl font-bold text-gray-800">Customer Details</h1>
                    <button 
                        className="text-white rounded-lg h-10 bg-green-500 hover:bg-green-200 transition-all p-2"
                        onClick={() => navigate("/shop-bill-management/add-customer")}
                    >
                        Add New Customer
                    </button>
                </div>

                <div className="overflow-auto max-h-[500px]">
                    <table className="min-w-full bg-white table-auto">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-base font-semibold text-gray-700">Name</th>
                                <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-base font-semibold text-gray-700">Email</th>
                                <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-base font-semibold text-gray-700">Mobile</th>
                                <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-base font-semibold text-gray-700">City</th>
                                <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-base font-semibold text-gray-700">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.data?.slice().reverse().map((customer) => (
                                <tr key={customer._id}>
                                    <td className="px-4 py-3 whitespace-no-wrap border-b text-base text-gray-800">{customer.name}</td>
                                    <td className="px-4 py-3 whitespace-no-wrap border-b text-base text-gray-800">{customer.email}</td>
                                    <td className="px-4 py-3 whitespace-no-wrap border-b text-base text-gray-800">{customer.mobile}</td>
                                    <td className="px-4 py-3 whitespace-no-wrap border-b text-base text-gray-800">{customer.city}</td>
                                    <td className="px-4 py-3 whitespace-no-wrap border-b text-base text-gray-800">
                                        <button
                                            onClick={() => HandleEdit(customer._id)}
                                            className="px-2 py-1 bg-blue-500 text-white rounded-md mr-2 hover:bg-blue-600 transition-all"
                                        >
                                          EDIT
                                        </button>
                                        <button
                                            onClick={() => HandleDelete(customer._id)}
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

    export default CustomerListing;
