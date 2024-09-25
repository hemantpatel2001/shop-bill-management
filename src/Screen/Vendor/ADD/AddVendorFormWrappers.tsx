

import { Formik, FormikHelpers } from 'formik'
import { object, string } from 'yup';
import { useNavigate } from 'react-router-dom';
import VendorLayout from '../Layout/VendorLayout';
export type  vendorFormValues = {
    name: string;
    email: string;
    mobile: string;
   address: string
};
const  AddVendorFormWrappers = () => {
    const navigate =useNavigate()
    const initialvalues: vendorFormValues = {
        name: '',
        email: '',
        mobile: '',
        address: '',
    };
const customerValidation = object({
        name: string().required('Enter vendor name'),
        email: string().email('Invalid email format').required('Enter vendor email'),
        mobile: string()
    .matches(/^[6-9]\d{9}$/, 'Enter valid mobile number')
    .length(10, 'Mobile number must be exactly 10 digits') 
    .required('Enter mobile number'), 
        address:string().required('Enter vendor address')
    });
const handleSubmit = (values:vendorFormValues,{resetForm,setSubmitting}:FormikHelpers<any> ) => {-
        console.log(values);
        if(values){
        setSubmitting(false)
        resetForm()
        }
     
    };
 return (
        <Formik initialValues={initialvalues} onSubmit={handleSubmit} validationSchema={customerValidation} >
            {(formikProps) => {
                return (
 < VendorLayout heading={"Add vendor"} buttonName="Add" formikProps={formikProps} />
           )
            }}
        </Formik>
    )
}
export default  AddVendorFormWrappers
