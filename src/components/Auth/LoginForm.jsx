import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { Link, useNavigate } from 'react-router-dom';

// Validation using Yup
const validationSchema = Yup.object({
  username: Yup.string()
    .required('Username is required!')
    .matches(/^[a-zA-Z0-9]+$/, 'Username can only contain letters and numbers')
    .min(3, 'Username must be at least 3 characters long')
    .matches(/[a-zA-Z]/, 'Username must contain at least one letter'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')
    .required('Password is required'),
});

const LoginForm = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.backgroundColor = '#21412F'; 
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          const userName = values.username;
          toast.success(`Welcome, ${userName}!`);
          resetForm();
          navigate('/home'); 
        }}
        validateOnChange={false}
        validateOnBlur={false}
        validate={(values) => {
        const errors = {};
        if (!values.username) {
          errors.username = 'Username is required';
          toast.error('Please enter a username!');
        } else if (values.username.length < 3) {
            errors.username = 'Username must be at least 3 characters';
            toast.error('Username must be at least 3 characters long!');
          }
        if (!values.password) {
            errors.password = 'Password is required';
            toast.error('Please enter your password!');
          } else if (values.password.length < 8) {
            errors.password = 'Password must be at least 8 characters';
            toast.error('Password must be at least 8 characters long!');
          } else if (!/[A-Z]/.test(values.password)) {
            errors.password = 'Password must contain at least one uppercase letter';
            toast.error('Password must contain at least one uppercase letter!');
          } else if (!/[a-z]/.test(values.password)) {
            errors.password = 'Password must contain at least one lowercase letter';
            toast.error('Password must contain at least one lowercase letter!');
          } else if (!/[0-9]/.test(values.password)) {
            errors.password = 'Password must contain at least one number';
            toast.error('Password must contain at least one number!');
          } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(values.password)) {
            errors.password = 'Password must contain at least one special character';
            toast.error('Password must contain at least one special character!');
          }
        return errors;
      }}
      >
        {({ errors, touched }) => (
          <div className="p-8 rounded-lg max-w-md w-full bg-[#21412F]shadow-sm">
            <div className="flex justify-center mb-6 cursor-pointer lg:font-semibold">
              <h3 className='font-bold py-1 px-1 bg-white'>YumFinds</h3>
            </div>

            <h1 className="text-3xl font-bold text-white text-center mb-6">
              Prepare Your Next Favorite Dish With <span className='text-green-900'>YumFind</span>
            </h1>
            {/* <p className="text-white text-center mb-8">
              Unlock the joy of cooking with step-by-step recipes tailored to your taste. Explore your favorite dishes today!
            </p> */}

            <Form>
              <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-medium text-white mb-2 text-left">Username</label>
                <Field
                  className={`p-2 w-full bg-[#21412F] text-gray-600 border ${errors.username && touched.username ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-white outline-none`}
                  type="text"
                  name="username"
                  placeholder="e.g, Johndoe123"
                  autoComplete="given-name"
                />
                <ErrorMessage name="username" component="div" className="text-red-500 text-sm mt-1" />

                <label htmlFor="password" className="block text-sm font-medium text-white mb-2 text-left mt-4">Password</label>
                <Field
                  className={`p-2 w-full border bg-[#21412F] text-gray-600 ${errors.password && touched.password ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-white outline-none`}
                  type="password"
                  name="password"
                  placeholder="e.g, Password123"
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div>
                <Link to='/forgot' className='flex justify-end text-[#7C7979] underline'>Forgot password?</Link>
              </div>

              <button
                type="submit"
                className="w-full mx-auto mb-24 bg-white text-md font-bold text-[#21412F] py-3 rounded-md flex items-center justify-center space-x-2 hover:bg-green-900 hover:text-white transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                Login
              </button>
            </Form>
            <div className="text-center">
              <p className='text-[#7C7979]'>Don't have an account? <Link to='register' className="text-white underline">Register</Link></p>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
