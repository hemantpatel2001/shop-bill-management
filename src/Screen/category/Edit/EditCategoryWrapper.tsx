import { Formik, FormikHelpers } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { object, string } from "yup";
import CategoryLayout from "../Layout/CategoryLayout";
import { useCategoryGetByIdQuery, useUpdatecategoryMutation } from "../../../Slice/categoryslice";

export type CategoryFormValues = {
    name: string;
};

const EditCategoryWrapper = () => {
    const navigate = useNavigate();

    const [updatecategory] = useUpdatecategoryMutation();
    const { id } = useParams();
    console.log(id)
    const { data } = useCategoryGetByIdQuery(id);
console.log(data)
    const initialValues: CategoryFormValues = {
        name: data?.data?.name || '',
    };

    const categoryValidation = object({
        name: string().required('Enter category name'),
    });

    const handleSubmit = (
        values: CategoryFormValues,
        { setSubmitting, resetForm }: FormikHelpers<CategoryFormValues>
    ) => {
        updatecategory({ data: values, id })
            .then((res) => {
                console.log(res);
                navigate("/shop-bill-management/category-details");
            });

        if (values) {
            resetForm();
            setSubmitting(false);
        }
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
                />
            )}
        </Formik>
    );
};

export default EditCategoryWrapper;
