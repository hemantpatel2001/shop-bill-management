import { Formik, FormikHelpers } from "formik";
import { object, string } from "yup";
import { useNavigate } from "react-router-dom";
import VendorLayout from "../Layout/VendorLayout";
import { useVendoraddMutation } from "../../../Slice/vendorslice";
import { toast } from "react-toastify";
export type vendorFormValues = {
  name: string;
  // email: string;
  mobile: string;
  address: string;
};
const AddVendorFormWrappers = () => {
  const [vendoradd] = useVendoraddMutation();
  const navigate = useNavigate();
  const initialvalues: vendorFormValues = {
    name: "",
    // email: '',
    mobile: "",
    address: "",
  };
  const vendorValidation = object({
    name: string().required("Enter vendor name"),
    // email: string().email('Invalid email format').required('Enter vendor email'),
    mobile: string()
      .matches(/^[6-9]\d{9}$/, "Enter valid mobile number")
      .length(10, "Mobile number must be exactly 10 digits")
      .required("Enter mobile number"),
    address: string().required("Enter vendor address"),
  });
  const handleSubmit = (
    values: vendorFormValues,
    { setSubmitting, resetForm }: FormikHelpers<any>
  ) => {
    vendoradd(values)
      .then((res) => {
        console.log(res);
        if (res.data.msg === "Vendor created successfully") {
          toast(res.data.msg);
          navigate("/shop-bill-management/vendors-details");
          console.log(res.data.status);
        } else if (res.data.status === "error") {
          toast(res.data.msg);
          resetForm();
        }
      })
      .finally(() => {
        setSubmitting(false);
        resetForm();
      });
    console.log(values);
  };
  return (
    <Formik
      initialValues={initialvalues}
      onSubmit={handleSubmit}
      validationSchema={vendorValidation}
    >
      {(formikProps) => {
        return (
          <VendorLayout
            heading={"Add vendor"}
            buttonName="ADD"
            formikProps={formikProps}
          />
        );
      }}
    </Formik>
  );
};
export default AddVendorFormWrappers;
