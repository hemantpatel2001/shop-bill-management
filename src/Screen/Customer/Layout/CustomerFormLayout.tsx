import { ErrorMessage, FormikProps } from 'formik';
import { CustomerFormValues } from '../Add/AddCustomerFormWrapper';
import ATMTextField from '../../../Components/Atoms/AtmTextField/AtmTextField';

type Props = {
    formikProps: FormikProps<CustomerFormValues>;
    heading: string;
    buttonName: string;
    isLoading?: boolean;
};

const CustomerFormLayout = ({ formikProps, heading, buttonName, isLoading }: Props) => {
    const { values, handleChange, handleSubmit, isSubmitting } = formikProps;

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
            <div className="w-full max-w-2xl p-8 bg-white border border-gray-200 rounded-lg shadow-md">
                <h2 className="text-3xl font-semibold text-center mb-6 text-slate-700">{heading}</h2>

                {/* Form wrapping the fields */}
                <form onSubmit={handleSubmit}>
                    {/* Name */}
                    <div className="mb-4">
                        <ATMTextField
                            label="Name"
                            placeholder="Enter your name"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            className="w-full  text-xl placeholder:text-xl"
                        />
                        <p className="text-red-400 text-xl h-4 mt-1"><ErrorMessage name="name" /></p>
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <ATMTextField
                            label="Email"
                            placeholder="Enter your email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            className="w-full text-xl placeholder:text-xl"
                        />
                        <p className="text-red-400 text-xl h-4 mt-1"><ErrorMessage name="email" /></p>
                    </div>

                    {/* Mobile */}
                    <div className="mb-4">
                        <ATMTextField
                            label="Mobile"
                            placeholder="Enter your mobile"
                            name="mobile"
                            value={values.mobile}
                            onChange={handleChange}
                            className="w-full text-xl placeholder:text-xl"
                        />
                        <p className="text-red-400  text-xl h-4 mt-1"><ErrorMessage name="mobile" /></p>
                    </div>

                    {/* City */}
                    <div className="mb-4">
                        <ATMTextField
                            label="City"
                            placeholder="Enter your city"
                            name="city"
                            value={values.city}
                            onChange={handleChange}
                            className="w-full  text-xl placeholder:text-xl "
                        />
                        <p className="text-red-400 text-xl h-4 mt-1"><ErrorMessage name="city" /></p>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className='ext-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 text-white dark:focus:ring-blue-800 font-medium w-full rounded-lg text-lg px-5 py-2.5 text-center me-2 mt-6 mb-2'
                           
                        >
                            {isSubmitting || isLoading ? 'Submitting...' : buttonName}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CustomerFormLayout;
