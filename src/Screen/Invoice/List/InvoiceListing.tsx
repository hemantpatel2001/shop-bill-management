

import { Link, useNavigate } from "react-router-dom";


type Props = {
    data: any,
    isLoading: boolean,
    isError: boolean,
    HandleDelete: (id: string) => void,
    HandleEdit: (id: string) => void
}
const dummy = [
    {
        customerId: "66f699901de6243ffad5981c", // Customer 
        invoicNo: "12334",
        customerName: "Rashi", // Customer Name
        date: "2024-10-03", // Invoice Date
        status: "paid",
        email: "rashi456111@gmail.com", // Customer Email
        mobile: "7890274442", // Customer Mobile
        paymentMethod: "debitCard", // Payment Method
        reciveAmount: "", // Received Amount
        products: [
            {
                productName: "Mango", // Product Name
                quantity: 50, // Quantity
                price: 100, // Price per unit

            }
        ]
    },
]

const InvoiceListing = ({ data, isLoading, isError, HandleEdit, HandleDelete }: Props) => {
    const navigate = useNavigate()
    console.log(data);


    if (isLoading) return <div className=' max-w-4xl mx-auto p-6 mt-16 bg-white rounded-md shadow-md'>hi</div>;
    if (isError) return <div className="flex justify-center text-sky-800 text-4xl p-44">Error fetching customers</div>;

    return (
        <div className="max-w-4xl mx-auto p-6 mt-16 bg-white rounded-md shadow-md">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-3xl font-bold text-gray-800">Invoice Details</h1>
                <button
                    className="text-white rounded-lg h-10 bg-green-500 hover:bg-green-200 transition-all p-2"
                    onClick={() => navigate("/shop-bill-management/add-invoice")}
                >
                    Add invoice
                </button>
            </div>

            <div className="overflow-auto max-h-[500px]">
                <table className="min-w-full bg-white table-auto">
                    <thead className=" bg-gray-100 sticky top-0 z-10 text-center">
                        <tr>
                            <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-base font-semibold text-gray-700">Invoice no</th>
                            <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-base font-semibold text-gray-700">Invoice date</th>
                            <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-base font-semibold text-gray-700">status</th>

                            <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-base font-semibold text-gray-700">Cutomer name</th>
                            <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-base font-semibold text-gray-700">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dummy.slice().reverse().map((customer) => (
                            <tr key={customer._id}>
                                <td className="px-4 py-3  border-b text-base text-gray-800">{customer.invoicNo}</td>
                                <td className="px-4 py-3  border-b text-base text-gray-800">{customer.date}</td>
                                <td className="px-4 py-3  border-b text-base text-gray-800">{customer.status}</td>

                                <td className="px-4 py-3  border-b text-base text-gray-800">{customer.customerName}</td>


                                <td className="px-4 py-3  border-b text-base text-gray-800">
                                    <button
                                        onClick={() => HandleEdit(customer._id)}
                                        className="px-2 py-1 bg-blue-500 text-white rounded-md mr-2 hover:bg-blue-600 transition-all"
                                    >
                                        EDIT
                                    </button>
                                    <button
                                        onClick={() => HandleEdit(customer._id)}
                                        className="px-2 py-1 bg-blue-500 text-white rounded-md mr-2 hover:bg-blue-600 transition-all"
                                    >
                                        Veiw
                                    </button>
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

export default InvoiceListing;
