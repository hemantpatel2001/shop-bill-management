import { Formik } from 'formik'
import CustomerFormLayout from '../Layout/CustomerFormLayout';
import { useCustomerAddMutation } from '../../../Slice/customerslice';
import { toast } from 'react-toastify';
import { object, string } from 'yup';
import { useNavigate } from 'react-router-dom';
export type CustomerFormValues = {
    name: string;
    email: string;
    mobile: string;
    city: string
};
const AddCustomerFormWrapper = () => {
    const navigate =useNavigate()
     const [customerAdd ] = useCustomerAddMutation()
    const initialvalues: CustomerFormValues = {
        name: '',
        email: '',
        mobile: '',
        city: '',
    };
const customerValidation = object({
        name: string().required('Enter customer name'),
        email: string().email('Invalid email format').required('Enter customer email'),
        mobile: string()
    .matches(/^[6-9]\d{9}$/, 'Enter valid mobile number')
    .length(10, 'Mobile number must be exactly 10 digits') 
    .required('Enter mobile number'), 
        city:string()
        .matches(/^[A-Za-z\s]+$/, "City name in alphabet")
        .required('Enter city')
    });
const handleSubmit = (values: CustomerFormValues) => {-
        console.log(values);
        customerAdd(values).then((res) => {
            console.log(res)
            if (res.data.msg) {
                toast(res.data.msg)
                navigate("/shop-bill-management/customer-details")
            } else {
                toast(res.data.msg)
            }
        })
    };
 return (
        <Formik initialValues={initialvalues} onSubmit={handleSubmit} validationSchema={customerValidation} >
            {(formikProps) => {
                return (
 < CustomerFormLayout heading={"Add Customer"} buttonName="Add" formikProps={formikProps} />
           )
            }}
        </Formik>
    )
}
export default AddCustomerFormWrapper
