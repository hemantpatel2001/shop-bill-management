import { ErrorMessage, FormikProps } from 'formik';
import ATMTextField from '../../../Components/Atoms/AtmTextField/AtmTextField';
import { vendorFormValues } from '../ADD/AddVendorFormWrappers';

type Props = {
    formikProps: FormikProps<vendorFormValues>;
    heading: string;
    buttonName: string;
};

const VendorLayout = ({ formikProps, heading, buttonName }: Props) => {
    const { values, handleChange, handleSubmit, isSubmitting } = formikProps;

    return (
        <div className="flex justify-center items-center h-screen bg-gray-50">
            <div className="w-full max-w-2xl p-8 bg-white border border-gray-200 rounded-lg shadow-md">
                <h2 className="text-3xl font-semibold text-center mb-6 text-slate-700">{heading}</h2>

                {/* Form wrapping the fields */}
                <form onSubmit={handleSubmit}>
                    {/* Name */}
                    <div className="mb-4">
                        <ATMTextField
                            label=" Name"
                            placeholder="Enter vendor name"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            className="w-full "
                        />
                        <p className="text-red-400 text-xl h-3"><ErrorMessage name="name" /></p>

                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <ATMTextField
                            label="Email"
                            placeholder="Enter vendor email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            className="w-full"
                        />
                        <p className="text-red-400 text-xl h-3"><ErrorMessage name='email' /></p>
                    </div>

                    {/* Mobile */}
                    <div className="mb-4">
                        <ATMTextField
                            label="Mobile"
                            placeholder="Enter mobile number"
                            name="mobile"
                            value={values.mobile}
                            onChange={handleChange}
                            className="w-full"
                        />
                        <p className='text-red-400 text-xl h-3'><ErrorMessage name='mobile' /></p>
                    </div>

                    {/* City */}
                    <div className="mb-4">
                        <ATMTextField
                            label="Address"
                            placeholder="Enter vendor address"
                            name="address"
                            value={values.address}
                            onChange={handleChange}
                            className="w-full"
                        />
                        <p className="text-red-400 text-xl h-3"><ErrorMessage name='address' /></p>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className='ext-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 text-white dark:focus:ring-blue-800 font-medium w-full rounded-lg text-lg px-5 py-2.5 text-center me-2 mt-4 mb-2'
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Submitting..." : `${buttonName} `}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default VendorLayout;
