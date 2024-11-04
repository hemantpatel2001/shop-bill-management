import React from 'react'

type Props = {}

const DashboardLayout = (props: Props) => {
  return (
    <div className='flex items-center justify-center m-auto mt-10 h-auto max-w-full'>
      <div className='p-3 flex flex-col md:flex-row justify-between w-full max-w-4xl space-y-4 md:space-y-0 md:space-x-4'>

        {/* Total Customers */}
        <div className='border border-gray-300 rounded-lg shadow-md w-full p-6 bg-white flex flex-col items-center text-center'>
          <h2 className='text-xl font-semibold mb-2'>Total Customers</h2>
          <span className='text-2xl font-bold text-blue-600'>2000</span>
        </div>

        {/* Total Vendors */}
        <div className='border border-gray-300 rounded-lg shadow-md w-full p-6 bg-white flex flex-col items-center text-center'>
          <h2 className='text-xl font-semibold mb-2'>Total Vendors</h2>
          <span className='text-2xl font-bold text-blue-600'>500</span>
        </div>

           {/* Total Transactions */}
           <div className='border border-gray-300 rounded-lg shadow-md w-full p-6 bg-white flex flex-col items-center text-center'>
          <h2 className='text-xl font-semibold mb-2'>Total Transactions</h2>
          <span className='text-2xl font-bold text-blue-600'>2000</span>
        </div>

      </div>
      
    </div>
    
  )
}

export default DashboardLayout
