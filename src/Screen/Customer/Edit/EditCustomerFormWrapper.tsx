import { Formik } from 'formik'
import CustomerFormLayout from '../Layout/CustomerFormLayout';
import { useNavigate, useParams } from 'react-router-dom';
import { useCustomerGetByIdQuery, useUpdatecustomerMutation } from '../../../Slice/customerslice';
import { CustomerFormValues } from '../Add/AddCustomerFormWrapper';
import { toast } from 'react-toastify';

const EditCustomerFormWrapper = () => {
    const navigate=useNavigate()
    const [updatecustomer] = useUpdatecustomerMutation();
    const { id } = useParams();
    const { data, isLoading, error } = useCustomerGetByIdQuery(id, {
        refetchOnMountOrArgChange: true, 
    });

  
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading customer data</p>;

    const initialvalues: CustomerFormValues = {
        name: data?.data?.name || '',
        email: data?.data?.email || '',
        mobile: data?.data?.mobile || '',
        city: data?.data?.city || '',
    };

    const handleSubmit = (values:CustomerFormValues) => {
        const data = values;
        updatecustomer({ data, id }).then((res) => {
            console.log(res)
            console.log(data)
            if (res.data) {
            toast(res.msg)
         navigate("/shop-bill-management/customer-details")
            }
        });
    };

    return (
        <Formik initialValues={initialvalues} onSubmit={handleSubmit}>
            {(formikProps) => {
                return (
                    <CustomerFormLayout
                        heading={"Edit Customer"}
                        buttonName={"Update"}
                        formikProps={formikProps}
                    />
                );
            }}
        </Formik>
    );
};

export default EditCustomerFormWrapper;
