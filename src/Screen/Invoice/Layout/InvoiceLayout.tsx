import { ErrorMessage, FieldArray } from "formik";
import AtmDateField from "../../../Components/Atoms/AtmDateField/AtmDate";
import ATMTextField from "../../../Components/Atoms/AtmTextField/AtmTextField";
import AtmNumberField from "../../../Components/Atoms/AtmNumberField/AtmNumberField";
import { useEffect } from "react";

type Props = {
    Heading: string;
    formikProps: any;
    customerData: any;
    productData: any;
    buttonName: string;
};

const InvoiceLayout = ({ Heading, formikProps, customerData, productData, buttonName }: Props) => {
    const { values, handleChange, setFieldValue, isSubmitting, errors } = formikProps;

    useEffect(() => {
        if (values.customerId) {
            const selectedCustomer = customerData?.data?.find(customer => customer._id === values.customerId);
            if (selectedCustomer) {
                setFieldValue('email', selectedCustomer.email);
            }
        } else {
            setFieldValue('email', '');
        }
    }, [values.customerId, customerData, setFieldValue]);

    const handleProductChange = (index: number, productId: string) => {
        const selectedProduct = productData?.data.find(product => product._id === productId);
        if (selectedProduct) {
            setFieldValue(`products[${index}].productId`, selectedProduct._id);
            setFieldValue(`products[${index}].price`, selectedProduct.sellingPrice);
        } else {
            setFieldValue(`products[${index}].price`, 0);
        }
    };

    const totalPrice = values.products?.reduce((total, product) => total + (product.quantity * product.price), 0) || 0;
    const dueAmount = totalPrice - (values.paidAmount || 0);

    return (
        <div className='flex justify-center m-auto mt-24 mx-2 md:mt-5'>
            <div className="w-full mb-4 max-w-4xl border p-3 shadow-xl rounded-lg bg-white">
                <h1 className="text-2xl mb-4 ">{Heading}</h1>

                <div className="mb-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <AtmDateField
                            label="Date"
                            name="date"
                            onChange={handleChange}
                            value={values.date}
                            className="block w-full p-3 border border-gray-300 rounded-md"
                        />
                        <p className="text-red-400 h-2 p-1">
                            <ErrorMessage name="date" />
                        </p>
                    </div>
                    <div>
                        <ATMTextField
                            name="invoiceNo"
                            label="Invoice number"
                            value={values.invoiceNo}
                            onChange={handleChange}
                            placeholder="Enter invoice number"
                            className="block w-full p-3 border border-gray-300 rounded-md"
                        />
                        <p className="text-red-400 h-2 p-1 text-sm">
                            <ErrorMessage name="invoiceNo" />
                        </p>
                    </div>
                </div>

                <div className="mb-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-lg text-slate-800 mb-1">Customer Name</label>
                        <select
                            name="customerId"
                            value={values.customerId}
                            onChange={handleChange}
                            className="block w-full p-3 border border-gray-300 rounded-md"
                        >
                            <option value="">Select name</option>
                            {customerData?.data?.map((customer) => (
                                <option key={customer._id} value={customer._id}>
                                    {customer.name}
                                </option>
                            ))}
                        </select>
                        <p className="text-red-400 h-2 p-1">
                            <ErrorMessage name="customerId" />
                        </p>
                    </div>

                    <div>
                        <label className="block text-lg text-slate-800 mb-1">Customer Email</label>
                        <input
                            name="email"
                            value={values.email}
                            className="block w-full p-3 border border-gray-300 rounded-md"
                            readOnly
                        />
                        <p className="text-red-400 h-2">
                            <ErrorMessage name='email' />
                        </p>
                    </div>
                </div>

                <h1 className="text-2xl mb-2">Products</h1>
                <FieldArray name="products">
                    {({ push, remove }) => (
                        <div>
                            <div className="overflow-y-auto h-44 border border-gray-300 mb-4">
                                <table className="min-w-full table-auto">
                                    <thead className="bg-gray-100 sticky top-0 text-center">
                                        <tr>
                                            <th className="px-4 py-2 text-left">Product Name</th>
                                            <th className="px-4 py-2 text-left">Quantity</th>
                                            <th className="px-4 py-2 text-left">Price</th>
                                            <th className="px-4 py-2 text-left">Total</th>
                                            <th className="px-4 py-2 text-left">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="border">
                                        {values.products.map((product, index) => (
                                            <tr key={index}>
                                                <td className="px-4 py-2">
                                                    <select
                                                        name={`products[${index}].productId`}
                                                        value={product.productId}
                                                        onChange={(e) => handleProductChange(index, e.target.value)}
                                                        className="block border px-4 py-2 w-full p-2 rounded-md"
                                                    >
                                                        <option value="">Select product</option>
                                                        {productData?.data?.map((product) => (
                                                            <option key={product._id} value={product._id}>
                                                                {product.productName}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <p className="text-red-400 h-2">
                                                        <ErrorMessage name={`products[${index}].productId`} />
                                                    </p>
                                                </td>
                                                <td className="border px-4 py-2">
                                                    <ATMTextField
                                                        name={`products[${index}].quantity`}

                                                        value={product.quantity}
                                                        onChange={handleChange}
                                                        placeholder="Quantity"
                                                    />
                                                    <p className="text-red-400 h-2">
                                                        <ErrorMessage name={`products[${index}].quantity`} />
                                                    </p>
                                                </td>
                                                <td className="border px-4 py-2">
                                                    <ATMTextField
                                                        name={`products[${index}].price`}
                                                        value={product.price}
                                                        placeholder="Price"
                                                        readOnly
                                                    />
                                                    <p className="text-red-400 h-2">
                                                        <ErrorMessage name={`products[${index}].price`} />
                                                    </p>
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {product.quantity * product.price || 0}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    <button
                                                        type="button"
                                                        onClick={() => remove(index)}
                                                        className="bg-red-500 text-white px-2 py-1 rounded"
                                                    >
                                                        Remove
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <button
                                type="button"
                                onClick={() => push({ productName: '', quantity: "1" })}
                                className="bg-blue-500 text-white px-4 py-2 rounded"
                            >
                                Add Product
                            </button>
                        </div>
                    )}
                </FieldArray>

                <div className="mb-4 grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                    <div>
                        <label className="block text-lg text-slate-800 mb-1">Total Price</label>
                        <input
                            type="text"
                            value={totalPrice}
                            readOnly
                            className="block w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block text-lg text-slate-800 mb-1">Amount Paid</label>
                        <AtmNumberField
                            value={values.paidAmount}
                            onChange={handleChange}
                            name="paidAmount"
                            className="block w-full p-2 border border-gray-300 rounded-md"

                        />
                        {errors.paidAmount && (

                            <p className="text-red-400  h-4 mt-2">  {errors.paidAmount} </p>
                        )}
                    </div>
                    <div>
                        <label className="block text-lg text-slate-800 mb-1">Due Amount</label>
                        <input
                            type="text"
                            value={dueAmount}
                            readOnly
                            className="block w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        disabled={isSubmitting || !!errors.paidAmount}
                        className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium w-full rounded-lg text-lg px-5 py-2.5 text-center mt-6'
                    >
                        {isSubmitting ? 'Submitting...' : buttonName}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InvoiceLayout;
