import { ErrorMessage, FormikProps } from 'formik';
import ATMTextField from '../../../Components/Atoms/AtmTextField/AtmTextField';
import { CategoryFormValues } from '../Add/AddCategoryWrapper';

type Props = {
    formikProps: FormikProps<CategoryFormValues>;
    heading: string;
    buttonName: string;
    isLoading:boolean
};

const CategoryLayout = ({ formikProps, heading, buttonName,isLoading }: Props) => {
    const { values, handleChange, handleSubmit, isSubmitting } = formikProps;

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4 sm:p-6 ml-0 sm:ml-64"> {/* Adjust the margin for responsiveness */}
            <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl p-6 sm:p-8 bg-white border border-gray-200 rounded-lg shadow-md">
                <h2 className="text-lg  sm:text-xl md:text-2xl font-semibold text-center mb-4 sm:mb-6 text-slate-700">
                    {heading}
                </h2>

                <form onSubmit={handleSubmit}>
                    {/* Category Name */}
                    <div className="mb-4">
                        <ATMTextField
                            label="Category name"
                            placeholder="Enter category name"
                            name="categoryName"
                            value={values.categoryName}
                            onChange={handleChange}
                            className="w-full p-2 text-base sm:text-lg md:text-xl"
                        />
                        <p  >
                            <ErrorMessage name="categoryName" />
                        </p>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full h-12 mt-4 bg-blue-600 hover:bg-blue-500 text-white text-lg sm:text-xl font-medium rounded-lg transition-colors duration-300"
                            disabled={isSubmitting}
                        >
                            {isSubmitting|| isLoading ? 'Submitting...' : buttonName}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CategoryLayout;
