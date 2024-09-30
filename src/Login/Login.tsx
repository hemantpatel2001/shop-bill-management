
import { useState } from 'react';
import { ErrorMessage, FormikProps } from 'formik';
import { FaEye, FaRegEyeSlash } from 'react-icons/fa';
import {  RiLockPasswordLine } from 'react-icons/ri';
import { MdAccountCircle } from 'react-icons/md';

type Props = {
  formikProps: FormikProps<any>;
  isLoading:any;
};

const Login = ({ formikProps,isLoading }: Props) => {

  const { values, handleChange, isSubmitting } = formikProps;

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex justify-center h-screen">
      <div className="flex flex-col justify-center mt-24 h-[400px] gap-5 m-auto w-[500px] border  absolute  shadow-lg text-gray-800 bg-slate-300 rounded p-12   bg-opacity-40">
        <h1 className="font-semibold text-2xl text-center postion  mb-12 border-b-2 p-2">Sign in</h1>

        {/* Email */}
        <div className="text-xl">
          <label className="text-xl "> <span className='flex gap-1 place-items-center '><MdAccountCircle /> Email</span></label>
          <input
            className="border-2 mt-3 border-gray-500 outline-none w-full rounded-lg p-2"
            type="text"
            placeholder="Enter your email"
            value={values.email}
            name='email'
            onChange={handleChange}
          />
          <p className="text-red-600 h-2">
            <ErrorMessage name="email" />
          </p>
        </div>

        {/* Password */}
        <div className="text-xl relative">
          <label className="text-xl">  <span className='flex gap-1 place-items-center '><RiLockPasswordLine/> Password</span></label>
          <input
            className="border-2 mt-3 border-gray-500 outline-none w-full  rounded-lg  p-2"
            type={showPassword ? 'text' : 'password'}
            value={values.password}
            placeholder="Enter your password"
            name='password'
            onChange={handleChange}
          />
          <p className="text-red-600 h-2">
            <ErrorMessage name="password" />
          </p>

          {/* Show/Hide Password Button */}
          <button
            type="button"
            className="absolute top-[39px] right-4 text-2xl  text-gray-600"
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
            className="bg-blue-600 w-full hover:bg-blue-300 h-12 mt-12 rounded-lg text-white  text-xl"
          >
            {isSubmitting||isLoading ? 'Submitting...' : 'Sign in'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
