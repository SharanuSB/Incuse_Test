import React, { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import Draggable from "react-draggable";

const schema = yup.object().shape({
  companyName: yup
    .string()
    .min(4, "Requires at least four chars")
    .max(15, "Only 15 characters allowed")
    .required(),
  email: yup.string().email("Invalid Email Format").required(),
  password: yup.string().min(8, "Minimum 8 chars required").max(18).required(),
});

const RegisterForm = () => {
  const [values, setValues] = useState({
    companyName: "",
    email: "",
    password: "",
  });
  console.log(setValues)
 
  const handleSubmit = (values) => {
    console.log("Form data", values);
    
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        {/* <Draggable> */}
      <div style={{ width: "400px", height: "400px", border: "2px solid" }}>
        <br />
        <center>
          <Formik
            initialValues={values}
            validationSchema={schema}
            onSubmit={handleSubmit}
          >
            {({ values, errors, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Draggable>
                  <div>
                    <label htmlFor="companyName">Company Name:</label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={values.companyName}
                      onChange={handleChange}
                    />
                    {errors.companyName && (
                      <p>
                        <b style={{ color: "red" }}>{errors.companyName}</b>
                      </p>
                    )}
                  </div>
                </Draggable> <br />
                <Draggable>
                  <div>
                    <label htmlFor="email">Email:</label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <p>
                        <b style={{ color: "red" }}>{errors.email}</b>
                      </p>
                    )}
                  </div>
                </Draggable> <br />
                <Draggable>
                  <div>
                    <label htmlFor="password">Password:</label>
                    <input
                      type="text"
                      id="password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                    />
                    {errors.password && (
                      <p>
                        <b style={{ color: "red" }}>{errors.password}</b>
                      </p>
                    )}
                  </div>
                </Draggable> <br />
                <Draggable>
                  <input type="submit" style={{ backgroundColor: "lightblue" }} value="Register" />
                </Draggable>
              </form>
            )}
          </Formik>
        </center>
      </div>
      {/* </Draggable> */}
    </div>
  );
};

export default RegisterForm;
