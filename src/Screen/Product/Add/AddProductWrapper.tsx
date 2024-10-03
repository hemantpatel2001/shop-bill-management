import { Formik } from 'formik'
import { number, object, string } from 'yup';
import ProductLayout from '../Layout/ProductLayout';
import { useCategoryGetQuery } from '../../../Slice/categoryslice';
import { useProductAddMutation } from '../../../Slice/productslice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
export type ProductFormValues = {
  productName: string,
  MRP: string,
  img: string,
  categoryId: string,
  productCode: string,
  sellingPrice: string,
  costPrice: string,
};
const AddProductFormWrapper = () => {
  const { data } = useCategoryGetQuery()
  const [addProduct] = useProductAddMutation()
  const navigate = useNavigate()
  const initialvalues: ProductFormValues = {
    productName: "",
    MRP: "",
    img: "",
    categoryId: "",
    productCode: "",
    sellingPrice: "",
    costPrice: "",
  };
  const customerValidation = object({
    productName: string().required('Enter product name'),
    MRP: number()
      .required('Enter MRP')
      .positive('Must be a positive number.')
      .test('MRP-greater-than-SP-CP', 'MRP must be more than selling price and cost price', function (value) {
        const { sellingPrice, costPrice } = this.parent;
        return value > sellingPrice && value > costPrice;
      }),
    categoryId: string().required('Select category'),
    img: string(),
    productCode: string().required('Enter product code'),
    sellingPrice: number()
      .required('Enter selling price')
      .positive('Must be a positive number.')
      .test('SP-greater-than-CP', 'Selling price must be more than cost price but less than MRP', function (value) {
        const { costPrice, MRP } = this.parent;
        return value > costPrice && value <= MRP;
      }),
    costPrice: number()
      .required('Enter cost price')
      .positive('Must be a positive number.')
      .test('CP-is-highest', 'Cost price must be the highest number', function (value) {
        const { MRP, sellingPrice } = this.parent;
        return value < MRP && value < sellingPrice;
      })

  });

  const handleSubmit = (values: ProductFormValues) => {
    addProduct(values).then((res) => {
      if (res?.data.msg === "product create successful")
        toast.success("Product added")
      navigate('/shop-bill-management/product-details')
      console.log(res)
    })
    console.log(values);
  };

  return (
    <Formik initialValues={initialvalues} onSubmit={handleSubmit} validationSchema={customerValidation} >
      {(formikProps) => {
        return (
          <ProductLayout data={data} heading={"Add product"} buttonName={"Add product"} formikProps={formikProps} />
        )
      }}
    </Formik>
  )
}

export default AddProductFormWrapper
