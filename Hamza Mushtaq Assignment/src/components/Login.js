import React,{useState} from 'react'
import { Formik } from 'formik';
import '../style/home.css'
import axios from 'axios';

export default function Login() {
    const [loggedIn,setLoggenIn]=useState(false);
  return (
      <div style={{ width: "100%" }}>
        
        <div className='login-div'>
        <h1 style={{ textAlign: "center", margin: "4%" }}>Login</h1>

          <Formik
              initialValues={{ email: '', password: '' }}
              validate={values => {
                  const errors = {};
                  if (!values.email ) {
                      errors.email = 'Required';
                      if(!values.password){
                        errors.password = 'Required';
                      }
                  } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                  ) {
                      errors.email = 'Invalid email address';
                  }
                  return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                console.log("values", values);
                  setTimeout(() => {
                      console.log(JSON.stringify(values, null, 2));
                      setSubmitting(false);
                  }, 400);
                  axios.post(`http://localhost:2000/api/login`, { email: values.email, password: values.password })
                      .then(res => {
                          console.log(res);
                        //   console.log("Status",res.data);
                          setLoggenIn(res.data.status)
                      })
              }}
          >
              {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
              }) => (
                  <form className='login-form' onSubmit={handleSubmit}>
                      <input
                          className='field'
                          type="email"
                          name="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                          placeholder="Your email.."
                      /> <br />
                      {errors.email && touched.email && errors.email}
                      <input
                      className='field'
                          type="password"
                          name="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                          placeholder="Your password.."
                      /> <br />
                      {errors.password && touched.password && errors.password}
                      <button 
                      className='btn' 
                      type="submit" 
                      disabled={isSubmitting}
                              style={{
                                  padding: "10px 20px",
                                  color: "white",
                                  backgroundColor: "#7685dd",
                                  borderRadius: "4px",
                                  borderColor: "#7685dd",
                                  margin: "0px 39%"
                              }}
                      >
                          Submit
                      </button>
                  </form>
              )}
          </Formik>

          {
            console.log(loggedIn)
          }
      </div>
      </div>
  )
}
