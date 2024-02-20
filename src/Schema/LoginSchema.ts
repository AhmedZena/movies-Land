import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9]{3,}@[a-zA-Z0-9.-]{4,5}\.[a-zA-Z]{2,4}$/,
      "Email starts with 3+ alphanumerics, 4-5 character domain, 2-4 letter extension."
    ),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password must be at most 20 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
      "Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number and one special character."
    ),
});

export default LoginSchema;
