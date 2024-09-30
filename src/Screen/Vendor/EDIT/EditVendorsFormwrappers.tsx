import { Formik, FormikHelpers } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import VendorLayout from '../Layout/VendorLayout';
import { vendorFormValues } from '../ADD/AddVendorFormWrappers';
import { useUpdateVendorMutation, useVendorGetByIdQuery } from '../../../Slice/vendorslice';
import { object, string } from 'yup';

const EditVendorsFormWrapper = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [updatevendor] = useUpdateVendorMutation();
  const { data, isLoading, error, refetch } = useVendorGetByIdQuery(id);  

  // Handle loading state
  if (isLoading) return <div className="loading-spinner">Loading...</div>;  
  if (error) return <div className="error-message">Error loading vendor data</div>;

  const initialValues: vendorFormValues = {
    name: data?.data?.name || '',
    email: data?.data?.email || '',
    mobile: data?.data?.mobile || '',
    address: data?.data?.address || '',
  };
  const vendorValidation = object({
    name: string().required('Enter vendor name'),
    email: string().email('Invalid email format').required('Enter vendor email'),
    mobile: string()
        .matches(/^[6-9]\d{9}$/, 'Enter valid mobile number')
        .length(10, 'Mobile number must be exactly 10 digits')
        .required('Enter mobile number'),
    address: string().required('Enter vendor address')
});
  const handleSubmit = async (values: vendorFormValues, { resetForm }: FormikHelpers<any>) => {
    try {
      const response = await updatevendor({ data: values, id });
      if (response.data) {
        toast.success(response.data.msg || 'Vendor updated successfully');
        navigate("/shop-bill-management/vendors-details");
        resetForm();
      }
    } catch (error) {
      toast.error('Error updating vendor');
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      enableReinitialize={true}
      validationSchema={vendorValidation}
    >
      {(formikProps) => {
        return (
          <VendorLayout
            heading={"Edit Vendor"}
            buttonName={"UPDATE"}
            formikProps={formikProps}
          />
        );
      }}
    </Formik>
  );
};

export default EditVendorsFormWrapper;
