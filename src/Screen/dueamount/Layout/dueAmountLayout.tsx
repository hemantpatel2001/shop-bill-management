import { ErrorMessage, FormikProps } from 'formik';

import ATMTextField from '../../../Components/Atoms/AtmTextField/AtmTextField';
import { DueAmountFormValues } from '../Add/addDueAmountWrapper';
import { MdCancel } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';


type Props = {
    formikProps: FormikProps<DueAmountFormValues>
    heading: string;
    buttonName: string;
    isLoading?: boolean;
    yourDueAmount: string
};

const DueAmountLayout = ({ formikProps, heading, buttonName, isLoading, yourDueAmount }: Props) => {
    const navigate = useNavigate()
    const { values, handleChange, handleSubmit, isSubmitting } = formikProps;

    return (
        <div className="flex justify-center items-center mt-14 sticky   lg:mt-6 p-8">

            <div className="w-full max-w-lg p-8 bg-white border border-gray-200 rounded-lg shadow-md">
                <div className='flex justify-end'>   
                     <button
                    className='text-red-500 text-xl md:text-2xl lg:text-3xl p-2 md:p-3 lg:p-4'
                    onClick={() => navigate("/shop-bill-management/invoice-details")}
                >
                    <MdCancel />
                </button>
                </div>


                <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6 text-slate-700">{heading}</h2>

                {/* Form wrapping the fields */}
                <form onSubmit={handleSubmit}>

                    <div className="mb-4">
                        <ATMTextField
                            label=" Pay due amount"
                            placeholder="Enter  due amount"
                            name="DueAmount"
                            value={values.DueAmount}
                            onChange={handleChange}
                            className="w-full text-xl placeholder:text-xl"
                        />
                        <p className="text-red-400 text-base h-4 mt-1"><ErrorMessage name="DueAmount" /></p>
                    </div>


                    <h1 className='text-2xl'>Your due amount: {`${yourDueAmount} ${String.fromCharCode(8377)}`}</h1>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium w-full rounded-lg text-lg px-5 py-2.5 text-center mt-6 mb-2'
                        >
                            {isSubmitting || isLoading ? 'Submitting...' : buttonName}
                        </button>
                    </div>
                </form>



            </div>
        </div>
    );
};

export default DueAmountLayout;
