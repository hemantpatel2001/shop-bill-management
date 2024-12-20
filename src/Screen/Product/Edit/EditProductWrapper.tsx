import { Formik } from "formik";
import ProductLayout from "../Layout/ProductLayout";
import { ProductFormValues } from "../Add/AddProductWrapper";
import { number, object, string } from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { useCategoryGetQuery } from "../../../Slice/categoryslice";
import {
  useProductGetByIdQuery,
  useUpdateproductMutation,
} from "../../../Slice/productslice";
import { toast } from "react-toastify";

const EditProductWrapper = () => {
  const { id } = useParams();
  const { data } = useCategoryGetQuery();
  const { data: productdata } = useProductGetByIdQuery(id);
  const [updateproduct] = useUpdateproductMutation();

  const navigate = useNavigate();
  const initialvalues: ProductFormValues = {
    productName: productdata?.data?.productName || "",
    MRP: productdata?.data?.MRP || "",
    img: productdata?.data?.img || "",
    categoryId: productdata?.data?.categoryId?._id || "",
    productCode: productdata?.data?.productCode || "",
    sellingPrice: productdata?.data?.sellingPrice || "",
    costPrice: productdata?.data?.costPrice || "",
  };

  const customerValidation = object({
    productName: string().required("Enter product name"),
    MRP: number()
      .required("Enter MRP")
      .positive("Must be a positive number.")
      .test(
        "MRP-greater-than-SP-CP",
        "MRP must be more than selling price and cost price",
        function (value) {
          const { sellingPrice, costPrice } = this.parent;
          return value > sellingPrice && value > costPrice;
        }
      ),
    categoryId: string().required("Select category"),
    img: string(),
    productCode: string().required("Enter product code"),
    sellingPrice: number()
      .required("Enter selling price")
      .positive("Must be a positive number.")
      .test(
        "SP-greater-than-CP",
        "Selling price must be more than cost price but less than MRP",
        function (value) {
          const { costPrice, MRP } = this.parent;
          return value > costPrice && value <= MRP;
        }
      ),
    costPrice: number()
      .required("Enter cost price")
      .positive("Must be a positive number.")
      .test("CP-is-highest", "Cost price must be the lowest", function (value) {
        const { MRP, sellingPrice } = this.parent;
        return value < MRP && value < sellingPrice;
      }),
  });

  const handleSubmit = (values: ProductFormValues) => {
    updateproduct({ data: values, id }).then((res) => {
      if (res?.data.status === "true") {
        navigate("/shop-bill-management/product-details");
        toast.success(res?.data.msg);
      } else {
        toast.error(res?.data.msg);
      }
    });

    console.log(values);
  };

  return (
    <Formik
      initialValues={initialvalues}
      onSubmit={handleSubmit}
      validationSchema={customerValidation}
      enableReinitialize={true}
    >
      {(formikProps) => {
        return (
          <ProductLayout
            data={data}
            heading={"Edit product"}
            buttonName={"Edit"}
            formikProps={formikProps}
          />
        );
      }}
    </Formik>
  );
};

export default EditProductWrapper;
