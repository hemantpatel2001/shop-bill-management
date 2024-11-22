import { Formik, FormikHelpers } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { object, string } from "yup";
import CategoryLayout from "../Layout/CategoryLayout";
import { useCategoryGetByIdQuery, useUpdatecategoryMutation } from "../../../Slice/categoryslice";
import { toast } from "react-toastify";

export type CategoryFormValues = {
    categoryName: string;
};

const EditCategoryWrapper = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [updatecategory, { isLoading }] = useUpdatecategoryMutation();

    const { data } = useCategoryGetByIdQuery(id);

    const initialValues: CategoryFormValues = {
        categoryName: data?.data?.categoryName || '',
    };

 
    const categoryValidation = object({
        categoryName: string().required('Enter category name'),
    });

  
    const handleSubmit = (
        values: CategoryFormValues,
        { setSubmitting, resetForm }: FormikHelpers<CategoryFormValues>
    ) => {
        updatecategory({ data: values, id })
            .then((res) => {
                if (res.data?.msg) {
                    toast.success(res.data?.msg);
                } else {
                    toast.success("Category updated successfully!");
                }
                navigate("/shop-bill-management/category-details");
            })
            .catch((error) => {
                toast.error(error?.message || "Something went wrong while updating category.");
            })
            .finally(() => {
                resetForm();
                setSubmitting(false);
            });
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={categoryValidation}
            enableReinitialize={true}
        >
            {(formikProps) => (
                <CategoryLayout
                    heading={"Update category"}
                    buttonName="UPDATE"
                    formikProps={formikProps}
                    isLoading={isLoading}
                />
            )}
        </Formik>
    );
};

export default EditCategoryWrapper;
