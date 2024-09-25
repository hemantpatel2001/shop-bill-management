import React from 'react'
import { ProductFormValues } from '../Add/AddProductWrapper';
import { ErrorMessage, FormikProps } from 'formik';
import ATMTextField from '../../../Components/Atoms/AtmTextField/AtmTextField';
import AtmNumberField from '../../../Components/Atoms/AtmNumberField/AtmNumberField';

type Props = {
    formikProps: FormikProps<ProductFormValues>;
    heading: string;
    buttonName: string;
};

const ProductLayout = ({ formikProps, heading, buttonName }: Props) => {
    const { values, handleChange, handleSubmit, isSubmitting } = formikProps;
    return (
        <div className="flex justify-center items-center h-screen  text-slate-600 bg-gray-50">
            <div className="w-full max-w-2xl p-6 bg-white border border-gray-200 rounded-lg shadow-md">
                <h2 className=" font-semibold text-center mb-6 text-2xl">{heading}</h2>


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
                        <p className='text-red-400 h-2'><ErrorMessage name='productName' /></p>

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
                        <p className='text-red-400 h-2'><ErrorMessage name='productCode' /></p>

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
                        <p className='text-red-400 h-2'><ErrorMessage name='IMG' /></p>
                    </div>

                    {/* cost price*/}
                    <div className="mb-4">
                        <AtmNumberField
                            label="Cost price"
                            placeholder="Enter cost price"
                            name="costPrice"
                            value={values.costPrice}
                            onChange={handleChange}
                            className="w-full"
                        />
                        <p className='text-red-400 h-2'><ErrorMessage name='costPrice' /></p>
                    </div>
                    {/* Mrp*/}
                    <div className="mb-4">
                        <AtmNumberField
                            label="MRP"
                            placeholder="Enter Mrp"
                            name="MRP"
                            value={values.MRP}
                            onChange={handleChange}
                            className="w-full"
                        />
                        <p className='text-red-400 h-2'><ErrorMessage name='MRP' /></p>

                    </div>
                    {/* seeling price*/}
                    <div className="mb-4">
                        <AtmNumberField
                            label="Selling price"
                            placeholder="Enter your city"
                            name="sellingPrice"
                            value={values.sellingPrice}
                            onChange={handleChange}
                            className="w-full"
                        />
                        <p className='text-red-400 h-2'><ErrorMessage name='sellingPrice' /></p>

                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="border rounded bg-blue-600  mt-4 w-full h-12 p-2 font-light text-xl text-white"
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