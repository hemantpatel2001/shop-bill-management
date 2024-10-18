import { Formik, FormikHelpers } from 'formik'
import { useCustomerAddMutation } from '../../../Slice/customerslice';
import { toast } from 'react-toastify';
import { object, string } from 'yup';
import { useNavigate } from 'react-router-dom';
import DueAmountLayout from '../Layout/dueAmountLayout';
export type DueAmountFormValues = {
   DueAmount: string;

};
const yourDueAmount="700"
const AddDueAmountWrapper = () => {
    const navigate = useNavigate()

    const initialvalues: DueAmountFormValues = {
        DueAmount: '',

    };
    const DueAmountValidation = object({
        DueAmount: string().required('Enter due amount'),


    });
    const handleSubmit = (values: DueAmountFormValues, { setSubmitting, resetForm }: FormikHelpers<any>) => {
        console.log(values);

    };
    return (
        <Formik initialValues={initialvalues} onSubmit={handleSubmit} validationSchema={DueAmountValidation} >
            {(formikProps) => {
                return (
                    <  DueAmountLayout heading={"Pay"} buttonName="Add due"  yourDueAmount={yourDueAmount} formikProps={formikProps} />
                )
            }}
        </Formik>
    )
}
export default AddDueAmountWrapper
