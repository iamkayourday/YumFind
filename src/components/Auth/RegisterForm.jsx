import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Imports from Utils
import InputField from "../Utils/InputField";
import {
  usernameValidation,
  passwordValidation,
  emailValidation,
} from "../Utils/ValidationSchema";
import Background from "../Utils/Background";

const validationSchema = Yup.object({
  email: emailValidation,
  username: usernameValidation,
  password: passwordValidation,
});

const RegisterForm = () => {
  const navigate = useNavigate();
  Background("#21412F");

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
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
              Prepare Your Next Favorite Dish With{" "}
              <span className="text-green-900">YumFind</span>
            </h1>

            <Form>
              <InputField
                label="Email"
                name="email"
                type="email"
                placeholder="johndoe@gmail.com"
                errors={errors}
                touched={touched}
              />
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
              <button
                type="submit"
                className="w-5/12 mx-auto mb-24 bg-white text-md font-bold text-[#21412F] py-3 rounded-md flex items-center justify-center hover:bg-green-900 hover:text-white transition"
              >
                Register
              </button>
            </Form>
            <div className="text-center">
              <p className="text-[#7C7979]">
                Already a member?{" "}
                <Link to="/" className="text-white underline">
                  Login
                </Link>
              </p>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
