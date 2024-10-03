
import { Formik } from "formik";
import ProductLayout from "../Layout/ProductLayout";
import { ProductFormValues } from "../Add/AddProductWrapper";
import { number, object, string } from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { useCategoryGetQuery } from "../../../Slice/categoryslice";

const EditProductWrapper = () => {
  const { id } = useParams();
  console.log(id);
  const { data } = useCategoryGetQuery();


  const navigate = useNavigate();
  const initialvalues: ProductFormValues = {
    productName: '',
    MRP: '',
    img: '',
    categoryId: '',
    productCode: '',
    sellingPrice: '',
    costPrice: '',
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
      .test('CP-is-highest', 'Cost price must be the lowest', function (value) {
        const { MRP, sellingPrice } = this.parent;
        return value < MRP && value < sellingPrice;
      }),
  });

  const handleSubmit = (values: ProductFormValues) => {
    updateProduct({ data: values, id }).then((res) => {
      console.log(res);
    });

    console.log(values);
  };

  return (
    <Formik initialValues={initialvalues} onSubmit={handleSubmit} validationSchema={customerValidation}>
      {(formikProps) => {
        return (
          <ProductLayout
            data={data}
            heading={'Edit product'}
            buttonName={'Edit'}
            formikProps={formikProps}
            isEdit={!!id} // Check if in edit mode
          />
        );
      }}
    </Formik>
  );
};

export default EditProductWrapper;
