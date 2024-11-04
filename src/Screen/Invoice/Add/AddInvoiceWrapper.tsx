import React from 'react';
import InvoiceLayout from '../Layout/InvoiceLayout';
import { Form, Formik, FormikHelpers } from 'formik';
import { array, date, number, object, string } from 'yup';
import { useCustomerGetQuery } from '../../../Slice/customerslice';
import { useProductGetQuery } from '../../../Slice/productslice';
import { useInvoiceAddMutation } from '../../../Slice/invoiceapislice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const initialValues = {
  customerId: '',
  invoiceNo: "",
  date: new Date().toISOString().split("T")[0],
  paidAmount: "",
  products: [{ productId: '', quantity: "1" }],
};




const invoiceValidation = object({
  customerId: string().required('Select customer name'),
  invoiceNo: string().required("Enter invoice number"),
  date: date()
    .required("Select a date")
    .max(new Date(), "Future dates are not allowed"),
  paidAmount: number()
    .required("Enter paid amount")
    .min(0, "Must be greater than or equal to 0") 
    .test('amount-paid', 'Amount paid must be less than or equal to total price', function (paidAmount) {
      const { products } = this.parent;
      const totalPrice = products.reduce((total, product) => total + (product.price * product.quantity), 0)||0;
      return paidAmount < totalPrice;
    }),
  products: array().of(
    object({
      productId: string().required('Enter product name'),
      quantity: number()
        .required('Quantity is required')
        .positive('Must be positive')
        .integer('Must be an integer'),
    })
  ).required('At least one product is required'),
});

const AddInvoiceWrapper = () => {
  const { data: customerData  } = useCustomerGetQuery();
  const { data: productData } = useProductGetQuery();
  const [addInvoce] = useInvoiceAddMutation()
  const navigate = useNavigate()


  const handleSubmit = (values: any, { setSubmitting, resetForm }: FormikHelpers<any>) => {
    console.log("Form Values:", values);
    addInvoce(values).then((res) => {
      if (res.data?.msg === "Invoice added successfully"){
      
    
        toast.success(res.data?.msg)
        navigate("/shop-bill-management/invoice-details")
      }
      else{
      toast.error("Invoice already exits")
      }
      
    }).catch((error) => {
      toast.error(error)
    }).finally(()=>{
      setSubmitting(false);
      resetForm() 
    })
    
  };
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
