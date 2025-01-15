import { Formik, FormikHelpers } from 'formik'
import CustomerFormLayout from '../Layout/CustomerFormLayout';
import { useNavigate, useParams } from 'react-router-dom';
import { useCustomerGetByIdQuery, useUpdatecustomerMutation } from '../../../Slice/customerslice';
import { CustomerFormValues } from '../Add/AddCustomerFormWrapper';
import { toast } from 'react-toastify';
import { object, string } from 'yup';

const EditCustomerFormWrapper = () => {
    const navigate = useNavigate()
    const [updatecustomer] = useUpdatecustomerMutation();
    const { id } = useParams();
    const { data, isLoading, error } = useCustomerGetByIdQuery(id);
    console.log(data)

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading customer data</p>;

    const initialvalues: CustomerFormValues = {
        name: data?.data?.name || '',
        email: data?.data?.email || '',
        mobile: data?.data?.mobile || '',
        city: data?.data?.city || '',
    };
    const customerValidation = object({
        name: string().required('Enter customer name'),
        email: string().email('Invalid email format').required('Enter customer email'),
        mobile: string()
            .matches(/^[6-9]\d{9}$/, 'Enter valid mobile number')
            .length(10, 'Mobile number must be exactly 10 digits')
            .required('Enter mobile number'),
        city: string()
            .matches(/^[A-Za-z\s]+$/, "City name in alphabet")
            .required('Enter city')
    });

    const handleSubmit = (values: CustomerFormValues, { resetForm }: FormikHelpers<any>) => {
        const data = values;
        updatecustomer({ data, id }).then((res) => {
            console.log(res.data.data, "edit")

            console.log(data)
            if (res.data) {
                toast.success(res.data.msg)
                navigate("/shop-bill-management/customer-details")
                resetForm()
            }
        });
    };

    return (
        <Formik initialValues={initialvalues} validationSchema={customerValidation} onSubmit={handleSubmit}>
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
