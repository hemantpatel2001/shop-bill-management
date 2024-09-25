
import { Formik, FormikHelpers } from "formik";
import { useNavigate } from "react-router-dom";
import { object, string } from "yup";
import CategoryLayout from "../Layout/CategoryLayout";

export type CategoryFormValues = {
    categoryName: string;
};

const AddCategoryWrapper = () => {
    const navigate = useNavigate();

    const initialValues: CategoryFormValues = {
        categoryName: '',
    };

    const categoryValidation = object({
        categoryName: string().required('Enter category name'),
    });

    const handleSubmit = (values: CategoryFormValues, {setSubmitting ,resetForm}: FormikHelpers<CategoryFormValues>) => {
        console.log(values);
      
       if(values){
        resetForm()
        setSubmitting(false)
       }
      
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={categoryValidation}
        >
            {(formikProps) => (
                <CategoryLayout
                    heading={"Add Category"}
                    buttonName="Add"
                    formikProps={formikProps}
                />
            )}
        </Formik>
    );
};

export default AddCategoryWrapper;
