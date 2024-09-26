import { ErrorMessage, FormikProps } from 'formik';
import ATMTextField from '../../../Components/Atoms/AtmTextField/AtmTextField';
import { CategoryFormValues } from '../Add/AddCategoryWrapper';

type Props = {
    formikProps: FormikProps<CategoryFormValues>;
    heading: string;
    buttonName: string;
};


const CategoryLayout = ({ formikProps, heading, buttonName }: Props) => {
    const { values, handleChange, handleSubmit ,isSubmitting} = formikProps; 

    return (
        <div className="flex justify-center items-center h-screen bg-gray-50">
            <div className="w-full max-w-lg p-8 bg-white border border-gray-200 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-center mb-6 text-slate-700">{heading}</h2>

                <form onSubmit={handleSubmit}>
                    {/* category  Name */}
                    <div className="mb-4 ">
                        <ATMTextField
                            label=" Category name"
                            placeholder="Enter category name"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            className="w-full p-2"
                        />
                        <p className='text-red-400 h-2'><ErrorMessage name='name' /></p>
                        
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="border rounded-lg bg-blue-600 hover:bg-blue-300 w-full h-12 p-2 mt-4 font-light text-xl text-white"
                            disabled={isSubmitting}
                        >
                       {isSubmitting? "Submitting...":`${buttonName} `}   
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CategoryLayout;
