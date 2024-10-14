import React, { useEffect } from "react";
import { ErrorMessage, FieldArray } from "formik";
import AtmDateField from "../../../Components/Atoms/AtmDateField/AtmDate";
import ATMTextField from "../../../Components/Atoms/AtmTextField/AtmTextField";
import AtmNumberField from "../../../Components/Atoms/AtmNumberField/AtmNumberField";

type Props = {
    Heading: string,
    formikProps: any,
    customerData: any,
    productData: any,
    buttonName: string,
};

const InvoiceLayout = ({ Heading, formikProps, customerData, productData, buttonName }: Props) => {
    const { values, handleChange, setFieldValue, isSubmitting } = formikProps;

    useEffect(() => {
        if (values.customerName) {
            const selectedCustomer = customerData?.data?.find(customer => customer.name === values.customerName);
            if (selectedCustomer) {
                setFieldValue('email', selectedCustomer.email);
                setFieldValue('customerId', selectedCustomer._id);
            }
        } else {
            setFieldValue('email', '');
            setFieldValue('customerId', '');
        }
    }, [values.customerName, customerData, setFieldValue]);

    const handleProductChange = (index: number, productName: string) => {
        const selectedProduct = productData?.data.find(product => product.productName === productName);
        if (selectedProduct) {
            setFieldValue(`products[${index}].productName`, selectedProduct.productName);
            setFieldValue(`products[${index}].price`, selectedProduct.sellingPrice);
            setFieldValue(`products[${index}].productId`, selectedProduct._id); // Set product ID
        } else {
            setFieldValue(`products[${index}].price`, 0);
            setFieldValue(`products[${index}].productId`, ''); // Clear product ID if no product is selected
        }
    };

    // Calculate total price
    const totalPrice = values.products?.reduce((total, product) => total + (product.quantity * product.price), 0);
    const dueAmount = totalPrice - (values.amountPaid || 0); // Use values.amountPaid for calculation

    return (
        <div className='flex justify-center mt-5 '>
            <div className="w-full max-w-3xl h-[550px] p-4 border shadow-xl rounded-lg shadow-slate-300">
                {/* Heading */}
                <h1 className="text-2xl mb-4">{Heading}</h1>

                <div className="mb-5 flex">
                    <div className="w-1/2 pr-2">
                        <AtmDateField
                            label="Date"
                            name="date"
                            onChange={handleChange}
                            value={values.date}
                            className="block w-full p-5 border border-gray-300 rounded-md"
                        />
                        <p className="text-red-400 h-2 p-1">
                            <ErrorMessage name="date" />
                        </p>
                    </div>
                    <div className="w-1/2 pl-2">
                        <ATMTextField
                            name="invoiceNumber"
                            label="Invoice number"
                            value={values.invoiceNumber}
                            onChange={handleChange}
                            placeholder="Enter invoice number"
                            className="block w-full p-5 border border-gray-300 rounded-md"
                        />
                        <p className="text-red-400 h-2 p-1 text-sm ">
                            <ErrorMessage name="invoiceNumber" />
                        </p>
                    </div>
                </div>

                <div className="mb-4 flex">
                    {/* Customer Name Dropdown */}
                    <div className="w-1/2 pr-2">
                        <label className="block text-xl text-slate-800 mb-1">Customer Name</label>
                        <select
                            name="customerName"
                            value={values.customerName}
                            onChange={handleChange}
                            className="block w-full p-2 border border-gray-300 rounded-md"
                        >
                            <option value="">Select name</option>
                            {customerData?.data?.map((customer) => (
                                <option key={customer._id} value={customer.name}>
                                    {customer.name}
                                </option>
                            ))}
                        </select>
                        <p className="text-red-400 h-2">
                            <ErrorMessage name="customerName" />
                        </p>
                    </div>

                    {/* Customer Email */}
                    <div className="w-1/2 pl-2">
                        <label className="block text-xl text-slate-800 mb-1">Customer Email</label>
                        <input
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            className="block w-full p-2 border border-gray-300 rounded-md"
                            readOnly // Email field is always read-only
                        />
                        <p className="text-red-400 h-2">
                            <ErrorMessage name='email' />
                        </p>
                    </div>
                </div>

                <input type="hidden" name="customerId" value={values.customerId} />

                <h1 className="text-2xl mb-2">Products</h1>
                <FieldArray name="products">
                    {({ push, remove }) => (
                        <div>
                            <div className="overflow-y-auto h-44 border border-gray-300 mb-4">
                                <table className="min-w-full table-auto">
                                    <thead className="bg-gray-100 sticky top-0 z-8 text-center">
                                        <tr>
                                            <th className="px-4 py-2 text-left">Product Name</th>
                                            <th className="px-4 py-2 text-left">Quantity</th>
                                            <th className="px-4 py-2 text-left">Price</th>
                                            <th className="px-4 py-2 text-left">Total</th>
                                            <th className="px-4 py-2 text-left">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {values.products.map((product, index) => (
                                            <tr key={index}>
                                                <td className="px-4 py-2">
                                                    <select
                                                        name={`products[${index}].productName`}
                                                        value={product.productName}
                                                        onChange={(e) => {
                                                            handleProductChange(index, e.target.value);
                                                        }}
                                                        className="block w-full p-2 border border-gray-300 rounded-md"
                                                    >
                                                        <option value="">Select product</option>
                                                        {productData?.data?.map((product) => (
                                                            <option key={product._id} value={product.productName}>
                                                                {product.productName}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <p className="text-red-400 h-2">
                                                        <ErrorMessage name={`products[${index}].productName`} />
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
                                                    {/* Display price based on selection, no user input allowed */}
                                                    <ATMTextField
                                                        name={`products[${index}].price`}
                                                        value={product.price}
                                                        placeholder="Price"
                                                        readOnly // Price field is read-only
                                                    />
                                                    <p className="text-red-400 h-2">
                                                        <ErrorMessage name={`products[${index}].price`} />
                                                    </p>
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {product.quantity * product.price}
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
                                onClick={() => push({ productName: '', quantity: 0, price: 0, productId: '' })}
                                className="bg-blue-500 text-white px-4 py-2 rounded"
                            >
                                Add Product
                            </button>
                        </div>
                    )}
                </FieldArray>

                <div className="mb-4 flex mt-2">
                    {/* Total Price */}
                    <div className="w-1/2 pl-2">
                        <label className="block text-xl text-slate-800 mb-1">Total Price</label>
                        <input
                            type="text"
                            value={totalPrice}
                            readOnly
                            className="block w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    {/* Amount Paid */}
                    <div className="w-1/2 pl-2">
                        <label className="block text-xl text-slate-800 mb-1">Amount Paid</label>
                        <AtmNumberField
                            value={values.amountPaid}
                            onChange={handleChange}
                            name="amountPaid"
                            className="block w-full p-2 border border-gray-300 rounded-md"
                        />
                        
                    </div>

                    {/* Due Amount */}
                    <div className="w-1/2 pl-2">
                        <label className="block text-xl text-slate-800 mb-1">Due Amount</label>
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
                        disabled={isSubmitting}
                        className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium w-full rounded-lg text-lg px-5 py-2.5 text-center me-2 mt-6 mb-2'
                    >
                        {isSubmitting ? 'Submitting...' : buttonName}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InvoiceLayout;
