import { Formik, FormikHelpers } from 'formik'
import { useNavigate, useParams } from 'react-router-dom';
import { useCustomerGetByIdQuery, useUpdatecustomerMutation } from '../../../Slice/customerslice';

import { toast } from 'react-toastify';
import { vendorFormValues } from '../ADD/AddVendorFormWrappers';
import VendorLayout from '../Layout/VendorLayout';

const EditVendorsFormWrapper = () => {
    const navigate=useNavigate()
    const [updatecustomer] = useUpdatecustomerMutation();
    const { id } = useParams();
    const { data, isLoading, error } = useCustomerGetByIdQuery(id, {
        refetchOnMountOrArgChange: true, 
    });

  
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading customer data</p>;

    const initialvalues: vendorFormValues = {
        name: data?.data?.name || '',
        email: data?.data?.email || '',
        mobile: data?.data?.mobile || '',
        address: data?.data?.city || '',
    };

    const handleSubmit = (values:vendorFormValues,{resetForm}:FormikHelpers<any>) => {
        const data = values;
        updatecustomer({ data, id }).then((res) => {
            console.log(res.data.data ,"edit")
            
            console.log(data)
            if (res.data) {
            toast(res.data.msg)
         navigate("/shop-bill-management/customer-details")
         resetForm()
            }
        });
    };

    return (
        <Formik initialValues={initialvalues} onSubmit={handleSubmit}>
            {(formikProps) => {
                return (
                    <VendorLayout
                        heading={"Edit vendor"}
                        buttonName={"ADD"}
                        formikProps={formikProps}
                    />
                );
            }}
        </Formik>
    );
};

export default EditVendorsFormWrapper;
