import React from 'react';
const dummy = [
    {
        dueAmount: "600",
        subTotal: 16500,

        products: [
            {
                productName: "sale",
                quantity: 50,
                sp: 30,
                totalAmount: 1500
            },
            {
                productName: "Weight machine",
                quantity: 1,
                sp: 15000,
                totalAmount: 15000
            }
        ]
    },
];

const VeiwinvoiceLayout = () => {
    return (
        <div className="max-w-3xl mx-auto p-8 border-2 border-gray-200 rounded font-sans shadow-lg mt-24 ">
            {/* invoice */}
            <div className='flex justify-between items-center border-b-4 p-2'>
                <span>
                    <img className="h-[58px]" src="https://salescrm.aarohiweblogger.com/assets/img/brand/logo.png" alt="Aarohi sales" />
                </span>
                <span className='text-4xl font-bold text-gray-600'>INVOICE
                    {/* invoice details */}
                    <p className='text-lg '>Date: <span className='text-sm font-mono'>12-04-2024</span></p>
                    <p className='text-lg '> Invoice no : <span className='text-sm font-sans'>INAV4545</span></p>
                </span>
            </div>

            {/* customer */}
            <div className='flex justify-between p-2 border-b-4'>
                <div className=''>
                    <h1 className='text-lg font-bold text-gray-600'>Invoice To:</h1>
                    <p>Hemant Patel</p>
                    <p>Hp264975@gmail.com</p>
                </div>
                <div className=''>
                    <h1 className='text-lg font-bold text-gray-600'>Status:</h1>
                    <span className='text-lg font-bold text-gray-600'>Due amount:</span> <span>{`400 ${String.fromCharCode(8377)}`}</span>
                </div>
            </div>

            {/* Products */}
            <h1 className='text-lg font-bold text-gray-600 mt-2'>Products</h1>
            <div className="overflow-auto max-h-[500px]">
                <table className="min-w-full bg-white table-auto">
                    <thead className="bg-gray-100 sticky top-0 text-center">
                        <tr>
                            <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-base font-semibold text-gray-700">Product name</th>
                            <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-base font-semibold text-gray-700">Qty</th>
                            <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-base font-semibold text-gray-700">Unit price</th>
                            <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-base font-semibold text-gray-700">Total amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dummy?.map((customer) =>
                            customer?.products?.map((product, index) => (
                                <tr key={index}>
                                    <td className="px-4 py-3 border-b text-base text-gray-800">{product.productName}</td>
                                    <td className="px-4 py-3 border-b text-base text-gray-800">{product.quantity}</td>
                                    <td className="px-4 py-3 border-b text-base text-gray-800">{product.sp}</td>
                                    <td className="px-4 py-3 border-b text-base text-gray-800">{product.totalAmount}</td>
                                </tr>
                            ))
                        )}
                    </tbody>

                </table>

                <div className=' flex gap-1 ml-[180px] sm:ml-[180px] md:ml-[180px] lg:ml-[300px] mt-4'>
                    <span className='text-lg font-bold text-gray-600'>
                        Grand total :
                    </span>
                    <span className='text-lg font-sans'>
                        {dummy[0].subTotal}
                    </span>
                </div>
            </div>


        </div>
    );
};

export default VeiwinvoiceLayout;
