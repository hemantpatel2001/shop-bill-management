



import { ErrorMessage, FormikProps } from 'formik';
import ATMTextField from '../../../Components/Atoms/AtmTextField/AtmTextField';
import { vendorFormValues } from '../ADD/AddVendorFormWrappers';

type Props = {
    formikProps: FormikProps<vendorFormValues>;
    heading: string;
    buttonName: string;
};

const VendorLayout = ({ formikProps, heading, buttonName }: Props) => {
    const { values, handleChange, handleSubmit ,isSubmitting} = formikProps; 

    return (
        <div className="flex justify-center items-center h-screen bg-gray-50">
            <div className="w-full max-w-lg p-8 bg-white border border-gray-200 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-center mb-6 text-slate-700">{heading}</h2>

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
                            className="w-full"
                        />
                        <p className='text-red-400 h-2'><ErrorMessage name='name' /></p>
                        
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
                          <p className='text-red-400 h-2'><ErrorMessage name='email' /></p>
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
                               <p className='text-red-400 h-2'><ErrorMessage name='mobile' /></p>
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
                               <p className='text-red-400 h-2'><ErrorMessage name='address' /></p>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="border rounded-lg bg-blue-600 hover:bg-blue-300 w-full h-12 p-2 mt-4 font-light text-xl text-white"
                            disabled={isSubmitting}
                        >
                       {isSubmitting? "Submitting...":`${buttonName} `}   
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default VendorLayout;
