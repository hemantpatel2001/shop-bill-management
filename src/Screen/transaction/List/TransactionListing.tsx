import { Link, useNavigate } from "react-router-dom";
import Skeleton from "../../Customer/TableSkeleton/Skeleton";


type Props = {
    data: any,
    isLoading: boolean,
    isError: boolean,

}


const TransactionListing = ({ data, isLoading, isError }: Props) => {
    const navigate = useNavigate()



    if (isLoading) return <div className=' max-w-4xl mx-auto p-6 mt-16 bg-white rounded-md shadow-md'><Skeleton/></div>;
    if (isError) return <div className="flex justify-center text-sky-800 text-4xl p-44">Error fetching customers</div>;

    return (
        <div className="max-w-4xl mx-auto p-6 mt-16 bg-white border rounded-md shadow-md">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-3xl font-bold text-gray-800">Transaction's</h1>

            </div>

            <div className="overflow-auto max-h-[500px]">
                <table className="min-w-full bg-white table-auto">
                    <thead className=" bg-gray-100 sticky top-0  text-center">
                        <tr>
                            <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-base font-semibold text-gray-700">Date</th>
                            <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-base font-semibold text-gray-700">Invoice no</th>
                            <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-base font-semibold text-gray-700">Amount</th>

                        </tr>
                    </thead>
                    <tbody>
                        {data?.slice().reverse().map((transaction: any) => (
                            <tr key={transaction.invoiceNo} >
                                <td className="px-4 py-3  border-b text-base text-gray-800">{transaction.date}</td>
                                <td className="px-4 py-3  border-b text-base text-gray-800">{transaction.invoiceNo}</td>
                                <td className="px-4 py-3  border-b text-base text-gray-800">{transaction.amount}</td>



                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TransactionListing;
