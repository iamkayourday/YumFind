import * as Yup from 'yup';
// Validation for Email
const emailValidation = Yup.string()
    .email('Invalid email address')
    .required('Email is required');

//  validation for username
const usernameValidation = Yup.string()
  .required('Username is required!')
  .matches(/^[a-zA-Z0-9]+$/, 'Username can only contain letters and numbers')
  .min(3, 'Username must be at least 3 characters long')
  .matches(/[a-zA-Z]/, 'Username must contain at least one letter');

// validation for password
const passwordValidation = Yup.string()
  .min(8, 'Password must be at least 8 characters')
  .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
  .matches(/[0-9]/, 'Password must contain at least one number')
  .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')
  .required('Password is required');




export { usernameValidation, passwordValidation, emailValidation};
