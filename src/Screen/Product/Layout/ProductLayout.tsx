import React from 'react'
import { ProductFormValues } from '../Add/AddProductWrapper';
import { ErrorMessage, FormikProps } from 'formik';
import ATMTextField from '../../../Components/Atoms/AtmTextField/AtmTextField';

type Props = {
    formikProps: FormikProps<ProductFormValues>;
    heading: string;
    buttonName: string;
};

const ProductLayout = ({ formikProps, heading, buttonName }: Props) => {
    const { values, handleChange, handleSubmit, isSubmitting } = formikProps;
    return (
        <div className="flex justify-center items-center h-screen bg-gray-50">
            <div className="w-full max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-center mb-6">{heading}</h2>


                <form onSubmit={handleSubmit}>
                    {/*product name */}
                    <div className="mb-4">
                        <ATMTextField
                            label="Product name"
                            placeholder="Enter  product  name"
                            name="productName"
                            value={values.productName}
                            onChange={handleChange}
                            className="w-full"
                        />
                        <p className='text-red-400'><ErrorMessage name='productName' /></p>

                    </div>

                    {/* prduct code*/}
                    <div className="mb-4">
                        <ATMTextField
                            label="Product code"
                            placeholder="Enter product code"
                            name="productCode"
                            value={values.productCode}
                            onChange={handleChange}
                            className="w-full"
                        />
                        <p className='text-red-400'><ErrorMessage name='productCode' /></p>

                    </div>

                    {/* imge */}
                    <div className="mb-4">
                        <ATMTextField
                            label="IMG"
                            placeholder=""
                            name="IMG"
                            value={values.IMG}
                            onChange={handleChange}
                            className="w-full"
                        />
                        <p className='text-red-400'><ErrorMessage name='IMG' /></p>
                    </div>

                    {/* cost price*/}
                    <div className="mb-4">
                        <ATMTextField
                            label="Cost price"
                            placeholder="Enter cost price"
                            name="costPrice"
                            value={values.costPrice}
                            onChange={handleChange}
                            className="w-full"
                        />
                        <p className='text-red-400'><ErrorMessage name='costPrice' /></p>
                    </div>
                    {/* Mrp*/}
                    <div className="mb-4">
                        <ATMTextField
                            label="MRP"
                            placeholder="Enter Mrp"
                            name="MRP"
                            value={values.MRP}
                            onChange={handleChange}
                            className="w-full"
                        />
                        <p className='text-red-400'><ErrorMessage name='MRP' /></p>

                    </div>
                    {/* seeling price*/}
                    <div className="mb-4">
                        <ATMTextField
                            label="Selling price"
                            placeholder="Enter your city"
                            name="sellingPrice"
                            value={values.sellingPrice}
                            onChange={handleChange}
                            className="w-full"
                        />
                        <p className='text-red-400'><ErrorMessage name='sellingPrice' /></p>

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

    )
}

export default ProductLayout