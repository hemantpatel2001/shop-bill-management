import { ProductFormValues } from '../Add/AddProductWrapper';
import { ErrorMessage, FormikProps } from 'formik';
import ATMTextField from '../../../Components/Atoms/AtmTextField/AtmTextField';
import AtmNumberField from '../../../Components/Atoms/AtmNumberField/AtmNumberField';

type Props = {
    formikProps: FormikProps<ProductFormValues>;
    heading: string;
    buttonName: string;
    data: any
};

const ProductLayout = ({ formikProps, heading, buttonName, data }: Props) => {
    const { values, handleChange, handleSubmit, isSubmitting } = formikProps;



    return (
        <div className="flex justify-center items-center  text-slate-600 bg-gray-50">
            <div className="w-full max-w-xl p-6 h-auto mt-10 shadow-2xl bg-white border border-gray-200 rounded-lg">
                <h2 className="font-semibold text-center mb-6 text-2xl">{heading}</h2>

                <form onSubmit={handleSubmit}>
                    {/* Product name */}
                    <div className="mb-4">
                        <ATMTextField
                            label="Product name"
                            placeholder="Enter product name"
                            name="productName"
                            value={values.productName}
                            onChange={handleChange}
                            className="w-full"
                        />
                        <p className="text-red-400 h-2">
                            <ErrorMessage name='productName' />
                        </p>
                    </div>

                    {/* Product code */}
                    <div className="mb-4">
                        <ATMTextField
                            label="Product code"
                            placeholder="Enter product code"
                            name="productCode"
                            value={values.productCode}
                            onChange={handleChange}
                            className="w-full"
                        />
                        <p className="text-red-400 h-2">
                            <ErrorMessage name='productCode' />
                        </p>
                    </div>

                    {/* Category dropdown */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                        <select
                            name="category"
                            value={values.category}
                            onChange={handleChange}
                            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                        >
                            {data?.data?.map((category) => (
                                <option key={category._id} value={category.name}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                        <p className="text-red-400 h-2">
                            <ErrorMessage name='category' />
                        </p>
                    </div>

                    {/* Image */}
                    <div className="mb-4">
                        <ATMTextField
                            label="Image URL"
                            placeholder="Enter image URL"
                            name="IMG"
                            value={values.IMG}
                            onChange={handleChange}
                            className="w-full"
                        />
                        <p className="text-red-400 h-2">
                            <ErrorMessage name='IMG' />
                        </p>
                    </div>

                    {/* Cost price */}
                    <div className="mb-4">
                        <AtmNumberField
                            label="Cost price"
                            placeholder="Enter cost price"
                            name="costPrice"
                            value={values.costPrice}
                            onChange={handleChange}
                            className="w-full"
                        />
                        <p className="text-red-400 h-2">
                            <ErrorMessage name='costPrice' />
                        </p>
                    </div>

                    {/* MRP */}
                    <div className="mb-4">
                        <AtmNumberField
                            label="MRP"
                            placeholder="Enter MRP"
                            name="MRP"
                            value={values.MRP}
                            onChange={handleChange}
                            className="w-full"
                        />
                        <p className="text-red-400 h-2">
                            <ErrorMessage name='MRP' />
                        </p>
                    </div>

                    {/* Selling price */}
                    <div className="mb-4">
                        <AtmNumberField
                            label="Selling price"
                            placeholder="Enter selling price"
                            name="sellingPrice"
                            value={values.sellingPrice}
                            onChange={handleChange}
                            className="w-full"
                        />
                        <p className="text-red-400 h-2">
                            <ErrorMessage name='sellingPrice' />
                        </p>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="border rounded bg-blue-600 mt-4 w-full h-12 p-2 font-light text-xl text-white disabled:opacity-50"
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

export default ProductLayout;
