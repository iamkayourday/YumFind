import React from 'react';
import { Field, ErrorMessage } from 'formik'; // Import Field and ErrorMessage from Formik

const InputField = ({ label, name, type, placeholder, errors, touched, autocomplete }) => (
  <div className="mb-4">
    <label htmlFor={name} className="block text-sm font-medium text-white mb-2 text-left">{label}</label>
    <Field
      className={`p-2 w-full bg-[#21412F] text-gray-600 border ${
        errors[name] && touched[name] ? 'border-red-500' : 'border-gray-300'
      } rounded-lg focus:ring-2 focus:ring-white outline-none`}
      type={type}
      name={name}
      placeholder={placeholder}
      autoComplete={autocomplete} // Corrected to autoComplete for HTML attribute
    />
    <ErrorMessage name={name} component="div" className="text-red-500 text-sm mt-1" />
  </div>
);

export default InputField;
