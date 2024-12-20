
import { useNavigate } from "react-router-dom";
import Skeleton from "../../Customer/TableSkeleton/Skeleton";

type Invoice = {
  _id: string;
  invoiceNo: string;
  date: string;
  customerId: {
    name: string;
  };
  totalAmount: number;
  paidAmount: number;
};



type Props = {
  data: any;
  isLoading: boolean; // Flag indicating if data is being loaded
  isError: boolean; // Flag indicating if there was an error
  HandleDelete?: (id: string) => void; // Function to delete an invoice (optional)
  HandleEdit: (id: string) => void; // Function to edit an invoice
  HandlePayDue: (id: string) => void; // Function to handle payment
  HandleView: (id: string) => void; // Function to view an invoice
};

const InvoiceListing = ({
  data,
  isLoading,
  isError,
  HandleEdit,
  HandlePayDue,
  HandleView,
}: Props) => {
  const navigate = useNavigate();

  if (isLoading)
    return (
      <div className="max-w-4xl mx-auto p-6 mt-16 bg-white rounded-md shadow-md">
        <Skeleton />
      </div>
    );

  if (isError)
    return (
      <div className="flex justify-center text-sky-800 text-4xl p-44">
        Error fetching customers
      </div>
    );

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
          <thead className="bg-gray-100 sticky top-0 text-center">
            <tr>
              <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-base font-semibold text-gray-700">
                Invoice no
              </th>
              <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-base font-semibold text-gray-700">
                Invoice date
              </th>
              <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-base font-semibold text-gray-700">
                Customer name
              </th>
              <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-base font-semibold text-gray-700">
                Total amount
              </th>
              <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-base font-semibold text-gray-700">
                Due amount
              </th>
              <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-base font-semibold text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.invoices?.map((invoice: Invoice) => (
              <tr key={invoice._id}>
                <td className="px-4 py-3 border-b text-base text-gray-800">
                  {invoice.invoiceNo}
                </td>
                <td className="px-4 py-3 border-b text-base text-gray-800">
                  {invoice.date}
                </td>
                <td className="px-4 py-3 border-b text-base text-gray-800">
                  {invoice.customerId.name}
                </td>
                <td className="px-4 py-3 border-b text-base text-gray-800">
                  {invoice.totalAmount}
                </td>
                <td className="px-4 py-3 border-b text-base text-gray-800">
                  {invoice.paidAmount}
                </td>
                <td className="px-4 py-3 border-b text-base text-gray-800">
                  <button
                    onClick={() => HandleEdit(invoice._id)}
                    className="px-2 py-1 bg-blue-500 text-white rounded-md mr-2 hover:bg-blue-600 transition-all"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => HandleView(invoice._id)}
                    className="px-2 py-1 bg-yellow-500 text-white rounded-md mr-2 hover:bg-yellow-600 transition-all"
                  >
                    View
                  </button>
                  <button
                    onClick={() => HandlePayDue(invoice._id)}
                    className="px-2 py-1 bg-green-500 text-white rounded-md mr-2 hover:bg-green-600 transition-all"
                  >
                    Pay in
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

export default InvoiceListing;
