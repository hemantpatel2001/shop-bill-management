import React from 'react';
import InvoiceLayout from '../Layout/InvoiceLayout';
import { Form, Formik } from 'formik';
import { array, date, number, object, string } from 'yup';
import { useCustomerGetQuery } from '../../../Slice/customerslice';
import { useProductGetQuery } from '../../../Slice/productslice';

const initialValues = {
  customerName: '',
  invoiceNumber: "",
  date: new Date(),
  amountPaid: "",
  products: [{ productName: '', quantity: 0, price: 0 }], 
};

const handleSubmit = (values) => {
  console.log("Form Values:", values);
};

const invoiceValidation = object({
  customerName: string().required('Select customer name'),
  date: date() .required('Select a date'),
  invoiceNumber: string().required("Enter invoice number"),
  amountPaid: number().required("Enter paid amount"),
  products: array().of(
    object({
      productName: string().required('Enter product name'),
      quantity: number().required('Quantity is required').positive('Must be positive').integer('Must be an integer'),
      price: number().required('Price is required').positive('Must be positive'),
    })
  ).required('At least one product is required'),
});

const EditInvoiceWrapper = () => {
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
            Heading={"Edit Invoice"}
            buttonName={"EDIT"}
            productData={productData}
            customerData={customerData}
            formikProps={formikProps}
          />
        </Form>
      )}
    </Formik>
  );
};

export default EditInvoiceWrapper;
