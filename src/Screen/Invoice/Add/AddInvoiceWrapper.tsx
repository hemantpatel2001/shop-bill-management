// import React from 'react';
import InvoiceLayout from '../Layout/InvoiceLayout';
import { Form, Formik } from 'formik';
import { array, date, number, object, string } from 'yup';
import { useCustomerGetQuery } from '../../../Slice/customerslice';
import { useProductGetQuery } from '../../../Slice/productslice';

const initialValues = {
  customerName: '',
  paymentMethod: '',
  status: '',
  products: [{ productName: '', quantity: 0, price: 0 }],
};

const handleSubmit = (values) => {
  console.log("Form Values:", values); // Log all values in a readable format
};

const invoiceValidation = object({
  customerName: string().required('Select customer name'),

  paymentMethod: string().required("Select payment type"),
  status: string().required("Select payment type"),
  products: array().of(
    object({
      productName: string().required('Enter product name'),
      quantity: number().required('Quantity is required').positive('').integer('Must be an integer'),
      price: number().required('Price is required').positive(''),
    })
  ).required('At least one product is required'),
});

const AddInvoiceWrapper = () => {
  const { data: customerData } = useCustomerGetQuery();
  const { data: productData } = useProductGetQuery();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={invoiceValidation}
    >
      {(formikProps) => (
        <Form onSubmit={formikProps.handleSubmit}>
          <InvoiceLayout
            Heading={"Add Invoice"}
            buttonName={"ADD"}
            productData={productData}
            customerData={customerData}
            formikProps={formikProps}
          />
        </Form>
      )}
    </Formik>
  );
};

export default AddInvoiceWrapper;
