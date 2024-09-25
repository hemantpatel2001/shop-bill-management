import { Formik } from 'formik'
import { number, object, string } from 'yup';
import ProductLayout from '../Layout/ProductLayout';




export type ProductFormValues = {
  productName: string,
  MRP: string,
  IMG: string,
  productCode: string,
  sellingPrice: string,
  costPrice: string,
};


const AddProductFormWrapper = () => {


  const initialvalues: ProductFormValues = {
    productName: "",
    MRP: "",
    IMG: "",
    productCode: "",
    sellingPrice: "",
    costPrice: "",
  };

  const customerValidation = object({
    productName: string().required('Enter product name'),
    MRP: number().required('Enter mrp').positive('Must be a positive number.'),
    IMG: string(),
    productCode: number().required("Enter product code").positive('Must be a positive number.'),
    sellingPrice: number().required("Enter selling price").positive('Must be a positive number.'),
    costPrice: number().required("Enter cost price").positive('Must be a positive number.')


  });

  const handleSubmit = (values: ProductFormValues) => {
    console.log(values);

  };

  return (
    <Formik initialValues={initialvalues} onSubmit={handleSubmit} validationSchema={customerValidation} >
      {(formikProps) => {
        return (
          <ProductLayout heading={"Add product"} buttonName={"Add product"} formikProps={formikProps} />
        )
      }}
    </Formik>
  )
}

export default AddProductFormWrapper
