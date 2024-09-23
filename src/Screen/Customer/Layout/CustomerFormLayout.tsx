import { ErrorMessage, FormikProps } from 'formik';
import { CustomerFormValues } from '../Add/AddCustomerFormWrapper';
import ATMTextField from '../../../Components/Atoms/AtmTextField/AtmTextField';

type Props = {
    formikProps: FormikProps<CustomerFormValues>;
    heading: string;
    buttonName: string;
};

const CustomerFormLayout = ({ formikProps, heading, buttonName }: Props) => {
    const { values, handleChange, handleSubmit ,isSubmitting} = formikProps; // Destructure handleSubmit from formikProps

    return (
        <div className="flex justify-center items-center h-screen bg-gray-50">
            <div className="w-full max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-center mb-6">{heading}</h2>

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
                            className="w-full"
                        />
                        <p className='text-red-400'><ErrorMessage name='name' /></p>
                        
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <ATMTextField
                            label="Email"
                            placeholder="Enter your email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            className="w-full"
                        />
                          <p className='text-red-400'><ErrorMessage name='email' /></p>
                    </div>

                    {/* Mobile */}
                    <div className="mb-4">
                        <ATMTextField
                            label="Mobile"
                            placeholder="Enter your mobile"
                            name="mobile"
                            value={values.mobile}
                            onChange={handleChange}
                            className="w-full"
                        />
                               <p className='text-red-400'><ErrorMessage name='mobile' /></p>
                    </div>

                    {/* City */}
                    <div className="mb-4">
                        <ATMTextField
                            label="City"
                            placeholder="Enter your city"
                            name="city"
                            value={values.city}
                            onChange={handleChange}
                            className="w-full"
                        />
                               <p className='text-red-400'><ErrorMessage name='city' /></p>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="border rounded bg-blue-600 w-full h-12 p-2 font-light text-xl text-white"
                            disabled={isSubmitting}
                        >
                            {buttonName}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CustomerFormLayout;
