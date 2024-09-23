import { Formik } from 'formik'
import { number, object, string } from 'yup';
import ProductLayout from '../Layout/ProductLayout';




export type ProductFormValues = {
  productName:string,
  MRP: string,
  IMG: string,
  productCode: string,
  sellingPrice: string,
  costPrice:string,
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
    MRP: number().required('Email is required'),
    IMG: string(),
    productCode: number().required("Enter product code"),
    sellingPrice:number().required("Enter selling price"),
    costPrice:number().required()
      

  });

  const handleSubmit = (values:ProductFormValues ) => {
    console.log(values);
  
  };

  return (
    <Formik initialValues={initialvalues} onSubmit={handleSubmit} validationSchema={customerValidation} >
      {(formikProps) => {
        return (
<ProductLayout  heading={"add product"}  buttonName ={"Add product" } formikProps={formikProps}/>
        )
      }}
    </Formik>
  )
}

export default AddProductFormWrapper
