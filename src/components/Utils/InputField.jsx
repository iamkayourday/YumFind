// Reusble components for inputs
import React from 'react';
import { Field, ErrorMessage } from 'formik'; 

const InputField = ({ label, name, type, placeholder, errors, touched,}) => (
  <div className="mb-4">
    <label htmlFor={name} className="block text-sm font-medium text-white mb-2 text-left">{label}</label>
    <Field
      className={`p-2 w-full bg-[#21412F] text-gray-700 border ${
        errors[name] && touched[name] ? 'border-red-500' : 'border-gray-300'
      } rounded-lg focus:ring-2 focus:ring-white outline-none`}
      type={type}
      name={name}
      placeholder={placeholder}
    />
    <ErrorMessage name={name} component="div" className="text-red-500 text-sm mt-1" />
  </div>
);

export default InputField;
