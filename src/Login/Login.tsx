
import { useState } from 'react';
import { ErrorMessage, FormikProps } from 'formik';
import { FaEye, FaRegEyeSlash } from 'react-icons/fa';

type Props = {
  formikProps: FormikProps<any>;
};

const Login = ({ formikProps,isLoading }: Props) => {

  const { values, handleChange, isSubmitting } = formikProps;

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex justify-center h-screen">
      <div className="flex flex-col justify-center h-[400px] gap-5 m-auto w-[400px] border shadow-lg text-gray-800 bg-slate-100 rounded p-12">
        <h1 className="font-semibold text-2xl text-center">Sign in</h1>

        {/* Email */}
        <div className="text-xl">
          <label className="text-xl">Email</label>
          <input
            className="border-2 border-gray-500 outline-none w-full rounded p-2"
            type="text"
            placeholder="Enter your email"
            value={values.email}
            name='email'
            onChange={handleChange}
          />
          <p className="text-red-500 h-2">
            <ErrorMessage name="email" />
          </p>
        </div>

        {/* Password */}
        <div className="text-xl relative">
          <label className="text-xl">Password</label>
          <input
            className="border-2 border-gray-500 outline-none w-full rounded p-2"
            type={showPassword ? 'text' : 'password'}
            value={values.password}
            placeholder="Enter your password"
            name='password'
            onChange={handleChange}
          />
          <p className="text-red-500 h-2">
            <ErrorMessage name="password" />
          </p>

          {/* Show/Hide Password Button */}
          <button
            type="button"
            className="absolute top-[28px] right-4 text-2xl  text-gray-600"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEye /> : <FaRegEyeSlash />}
          </button>
        </div>

        {/* Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting||isLoading}
            className="bg-sky-600 w-full hover:bg-sky-300 h-12 mt-12 rounded text-white  text-xl"
          >
            {isSubmitting||isLoading ? 'Submitting...' : 'Sign in'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
