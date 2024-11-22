import { Formik, FormikHelpers } from "formik";
import { useNavigate } from "react-router-dom";
import { object, string } from "yup";
import CategoryLayout from "../Layout/CategoryLayout";
import { useCategoryAddMutation } from "../../../Slice/categoryslice";
import { toast } from "react-toastify";

export type CategoryFormValues = {
    categoryName: string;
};

const AddCategoryWrapper = () => {
    const navigate = useNavigate();
    const [categoryAdd,{isLoading}] = useCategoryAddMutation(); // The mutation to add category

    const initialValues: CategoryFormValues = {
        categoryName: '',
    };

    const categoryValidation = object({
        categoryName: string().required('Enter category name'),
    });

    const handleSubmit = (values: CategoryFormValues, { setSubmitting, resetForm }: FormikHelpers<CategoryFormValues>) => {
        console.log(values);

        if (values) {
            categoryAdd(values)
                .then((res) => {
                    console.log(res);

                    if (res.data?.status === true) {
                        toast.success(res.data?.msg || "Category added successfully!");
                        navigate("/shop-bill-management/category-details"); // Navigate to the category details page
                        resetForm(); // Reset the form after submission
                    } else {
                        toast.error(res.data?.msg || "Something went wrong, please try again.");
                    }
                })
                .catch((error) => {
                    console.error(error);
                    toast.error(error?.message || "Failed to add category.");
                })
                .finally(() => {
                    setSubmitting(false);
                });
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
                    isLoading={isLoading}
                />
            )}
        </Formik>
    );
};

export default AddCategoryWrapper;
