import React from 'react';
import { Formik, Form } from "formik";
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

// Imports from Utils
import InputField from '../Utils/InputField';
import {  emailValidation } from '../Utils/ValidationSchema';
import Background from '../Utils/Background';

// Validation using Yup
const validationSchema = Yup.object({
  email: emailValidation,
});

const  ForgotPasswordForm= () => {
  const navigate = useNavigate();
  Background('#21412F'); 

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <Formik
        initialValues={{ username: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          toast(`Reset link sent, Check your email!`);
          resetForm();
          navigate('/'); 
        }}
      >
        {({ errors, touched }) => (
          <div className="p-8 rounded-lg max-w-md w-full bg-[#21412F]shadow-sm">
            <div className="flex justify-center mb-6 cursor-pointer lg:font-semibold">
              <h3 className='font-bold py-1 px-1 bg-white'>YumFinds</h3>
            </div>


            <Form>
              <InputField 
                label="Email"
                name="email"
                type="email"
                placeholder="johndoe@gmail.com"
                errors={errors}
                touched={touched}
                />
                
              <div>
                <Link to='/' className='flex justify-end text-[#7C7979] underline'>Login</Link>
              </div>

              <button
                type="submit"
                className="w-5/12 mx-auto mb-24 bg-white text-md font-bold text-[#21412F] py-3 rounded-md flex items-center justify-center space-x-2 hover:bg-green-900 hover:text-white transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                Send Reset Link
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default ForgotPasswordForm;
