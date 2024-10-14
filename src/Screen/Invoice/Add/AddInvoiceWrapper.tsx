import React from 'react';
import InvoiceLayout from '../Layout/InvoiceLayout';
import { Form, Formik, FormikHelpers } from 'formik';
import { array, date, number, object, string } from 'yup';
import { useCustomerGetQuery } from '../../../Slice/customerslice';
import { useProductGetQuery } from '../../../Slice/productslice';

type Props ={
  
}

const initialValues = {
  customerName: '',
  invoiceNumber: "",
  date: new Date().toISOString().split("T")[0], 
  amountPaid: "",
  products: [{ productName: '', quantity: 0, price: 0 }],
};

const handleSubmit = (values:any,{setSubmitting}:FormikHelpers<any>) => {
  console.log("Form Values:", values);
  setSubmitting(false)

};

const invoiceValidation = object({
  customerName: string().required('Select customer name'),
  invoiceNumber: string().required("Enter invoice number"),
  date: date()
    .required("Select a date")
    .max(new Date(), "Future dates are not allowed"),
  amountPaid: number().required("Enter paid amount"),
  products: array().of(
    object({
      productName: string().required('Enter product name'),
      quantity: number().required('Quantity is required').positive('Must be positive').integer('Must be an integer'),
      price: number().required('Price is required').positive('Must be positive'),
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
            formikProps={{
              ...formikProps,

              values: {
                ...formikProps.values,
                date: formikProps.values.date,
              },
            }}
          />
        </Form>
      )}
    </Formik>
  );
};

export default AddInvoiceWrapper;
