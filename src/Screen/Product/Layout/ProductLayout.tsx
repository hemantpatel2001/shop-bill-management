import { ErrorMessage, FormikProps } from "formik";
import ATMTextField from "../../../Components/Atoms/AtmTextField/AtmTextField";
import AtmNumberField from "../../../Components/Atoms/AtmNumberField/AtmNumberField";
import { ProductFormValues } from "../Add/AddProductWrapper";
type Props ={
    formikProps: FormikProps<ProductFormValues>; 
    heading: string; 
    buttonName: string;
    isEdit?: boolean;
    data:any
}
const ProductLayout = ({ formikProps, heading, buttonName, data, isEdit }:Props) => {
    const { values, handleChange, handleSubmit, isSubmitting } = formikProps;

    return (
        <>
            <div className="flex justify-center relative mt-5 items-center text-slate-600">
                <div className="w-full max-w-4xl p-8 h-auto shadow-2xl bg-white border border-gray-200 rounded-lg">
                    <h2 className="font-semibold  mb-6 text-3xl text-start">{heading}</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-6 flex flex-col sm:flex-row sm:space-x-4">
                            {/* Product name */}
                            <div className="flex-1">
                                <ATMTextField
                                    label="Product name"
                                    placeholder="Enter product name"
                                    name="productName"
                                    value={values.productName}
                                    onChange={handleChange}
                                    className="w-full p-3"
                                />
                                <p className="text-red-400 h-2">
                                    <ErrorMessage name="productName" />
                                </p>
                            </div>

                            {/* Product code */}
                            <div className="flex-1">
                                <ATMTextField
                                    label="Product code"
                                    placeholder="Enter product code"
                                    name="productCode"
                                    value={values.productCode}
                                    onChange={handleChange}
                                    className="w-full p-3"
                                />
                                <p className="text-red-400 h-2">
                                    <ErrorMessage name="productCode" />
                                </p>
                            </div>
                        </div>

                        {/* Category dropdown */}
                        <div className="mb-6">
                            <label className="block text-2xl text-gray-700 mb-2">Category</label>
                            <select
                                name="categoryId"
                                value={values.categoryId}
                                onChange={handleChange}
                                disabled={isEdit}
                                className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                            >
                                <option value="">Select category</option>
                                {data?.data?.map((category:any) => (
                                  
                                    <option key={category?._id} value={category?._id}>
                                        {category?.categoryName}
                                    </option>
                                ))}
                            </select>
                            <p className="text-red-400 h-2">
                                <ErrorMessage name="categoryId" />
                            </p>
                        </div>

                        {/* Image URL */}
                        <div className="mb-6">
                            <ATMTextField
                                label="Image URL"
                                placeholder="Enter image URL"
                                name="img"
                                value={values.img}
                                onChange={handleChange}
                                className="w-full p-3"
                            />
                            <p className="text-red-400 h-2">
                                <ErrorMessage name="img" />
                            </p>
                        </div>

                        <div className="mb-6 flex flex-col sm:flex-row sm:space-x-4">
                            {/* Cost price */}
                            <div className="flex-1">
                                <AtmNumberField
                                    label="Cost price"
                                    placeholder="Enter cost price"
                                    name="costPrice"
                                    value={values.costPrice}
                                    onChange={handleChange}
                                    className="w-full p-3"
                                />
                                <p className="text-red-400 h-2">
                                    <ErrorMessage name="costPrice" />
                                </p>
                            </div>

                            {/* MRP */}
                            <div className="flex-1">
                                <AtmNumberField
                                    label="MRP"
                                    placeholder="Enter MRP"
                                    name="MRP"
                                    value={values.MRP}
                                    onChange={handleChange}
                                    className="w-full p-3"
                                />
                                <p className="text-red-400 h-2">
                                    <ErrorMessage name="MRP" />
                                </p>
                            </div>

                            {/* Selling price */}
                            <div className="flex-1">
                                <AtmNumberField
                                    label="Selling price"
                                    placeholder="Enter selling price"
                                    name="sellingPrice"
                                    value={values.sellingPrice}
                                    onChange={handleChange}
                                    className="w-full p-3"
                                />
                                <p className="text-red-400 h-2">
                                    <ErrorMessage name="sellingPrice" />
                                </p>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="border rounded bg-blue-600 mt-4 w-full h-12 p-3 font-light text-xl text-white disabled:opacity-50"
                                disabled={isSubmitting}
                            >
                               {isSubmitting? "submiting... " : buttonName } 
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );

};

export default ProductLayout;
