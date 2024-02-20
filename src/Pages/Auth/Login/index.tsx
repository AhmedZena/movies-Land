import React, { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import IUser from "../../../Interfaces/IUser";
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from "formik";
import LoginSchema from "../../../Schema/LoginSchema";
import "./pawwrod.css";
function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <h2 className="text-2xl font-bold text-center mt-2 mb-1 text-gray-900 ">
        Login
      </h2>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={(values: IUser, { setSubmitting }: FormikHelpers<IUser>) => {
          console.log(values);
          //   setUser(values);
          setSubmitting(false);
        }}
      >
        <Form className="max-w-sm mx-auto bg-white shadow-md rounded-lg p-5 dark:bg-gray-800">
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
            />

            <ErrorMessage
              name="email"
              component="p"
              className="text-red-500 text-sm mt-1"
            />
          </div>
          <div className="mb-5 relative">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>

            <Field
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your password"
            />
            <button
              type="button"
              onClick={handlePasswordVisibility}
              className="absolute w-6 z-10 right-2 top-10"
            >
              {showPassword ? (
                <FaRegEyeSlash className="w-6 text-white" />
              ) : (
                <FaRegEye className="w-6 text-gray-400" />
              )}
            </button>

            <ErrorMessage
              name="password"
              component="p"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </>
  );
}

export default Login;
