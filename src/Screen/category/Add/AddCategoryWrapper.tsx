import { Formik, FormikHelpers } from "formik";
import { useNavigate } from "react-router-dom";
import { object, string } from "yup";
import CategoryLayout from "../Layout/CategoryLayout";
import { useCategoryAddMutation } from "../../../Slice/categoryslice";
import { toast } from "react-toastify";

export type CategoryFormValues = {
   name: string;
};

const AddCategoryWrapper = () => {
    const navigate = useNavigate();
  const [categoryAdd]=useCategoryAddMutation()
    const initialValues: CategoryFormValues = {
       name: '',
    };

    const categoryValidation = object({
        name: string().required('Enter category name'),
    });

    const handleSubmit = (values: CategoryFormValues, {setSubmitting ,resetForm}: FormikHelpers<CategoryFormValues>) => {
        console.log(values);
       
       if(values){
        categoryAdd(values).then((res)=>{
            console.log(res);
            
          if(res.data?.mag==="category added successfully"){
            toast.success(res.data?.mag)
            navigate("/shop-bill-management/category-details")
            resetForm()
            
        setSubmitting(false)
          }else {
            toast.error(res.data?.msg)
            navigate('/shop-bill-management/add-category')
            setSubmitting(false)
            resetForm()
          }   
        })}
      
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
