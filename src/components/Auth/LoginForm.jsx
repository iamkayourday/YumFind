import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

// Imports from Utils
import Background from "../Utils/Background";
import {
  usernameValidation,
  passwordValidation,
} from "../Utils/ValidationSchema";
import InputField from "../Utils/InputField";

// Validation using Yup
const validationSchema = Yup.object({
  username: usernameValidation,
  password: passwordValidation,
});

const LoginForm = () => {
  const navigate = useNavigate();
  Background("#21412F");

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={validationSchema}
        // Handle form Submit
        onSubmit={(values, { resetForm }) => {
          const userName = values.username;
          toast.success(`Welcome, ${userName}!`);
          localStorage.setItem("username", userName);
          resetForm();
          navigate("/home");
        }}
      >
        {({ errors, touched }) => (
          <div className="p-8 rounded-lg max-w-md w-full bg-[#21412F] shadow-sm">
            <div className="flex justify-center mb-6 cursor-pointer lg:font-semibold">
              <h3 className="font-bold py-1 px-1 bg-white">YumFinds</h3>
            </div>

            <h1 className="text-3xl font-bold text-white text-center mb-6">
              Prepare Your Next Favorite Dish With YumFind
            </h1>
            <Form>
              <InputField
                label="Username"
                name="username"
                type="text"
                placeholder="e.g, Johndoe123"
                errors={errors}
                touched={touched}
              />
              <InputField
                label="Password"
                name="password"
                type="password"
                placeholder="e.g, Password123"
                errors={errors}
                touched={touched}
              />
              <div>
                <Link
                  to="/forgot"
                  className="flex justify-end text-white underline"
                >
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-5/12 mx-auto mb-24 bg-white text-md font-bold text-[#21412F] py-3 rounded-md flex items-center justify-center hover:bg-green-900 hover:text-white transition"
              >
                Login
              </button>
            </Form>

            <div className="text-center">
              <p className="text-[#7C7979]">
                Don't have an account?{" "}
                <Link to="/register" className="text-white underline">
                  Register
                </Link>
              </p>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
