import React, { useState,useEffect } from 'react'
import { Formik, Form, Field } from 'formik';
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import * as Yup from 'yup';
import '../style/home.css'
import axios from 'axios';
import AlertComponent from './AlertComponent';

const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .min(8, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });

export default function Register() {
  const [register,setRegister]=useState(false)
  return (
    <div style={{ width: "100%" }}>
      {
        register ? <AlertComponent />: ""
      }
    <div className='login-div'>
    <h1 style={{ textAlign: "center", margin: "4%" }}>Register</h1>
     <Formik
       initialValues={{
         name: '',
         email: '',
         password:'',
       }}
       validationSchema={SignupSchema}
       onSubmit={values => {
         console.log(values);
         const data={
            name: values.name,
            email: values.email,
            password: values.password
        }
         console.log("data", data);
         axios.post(`http://localhost:2000/api/signup`, { name: data.name, email: data.email, password: data.password })
        .then(res => {
        console.log(res);
        console.log(res.data);
        if(register == false){
          setRegister(true);
          setTimeout(() => {
            setRegister(false);
          }, 3000);
        }
        })
        .catch(err=>{
          console.log(err);
        })
       }}
     >
       {({ errors, touched }) => (
         <Form className='login-form'>
           <Field className='field' name="name" placeholder="name.." />
           {errors.name && touched.name ? (
             <div style={{ color: "red" }}>{errors.name}</div>
           ) : null}

           <Field className='field' name="email" type="email" placeholder="email.." />
           {errors.email && touched.email ? <div style={{ color: "red" }}>{errors.email}</div> : null}

           <Field className='field' name="password" type="password" placeholder="password.." />
           {errors.password && touched.password ? <div style={{ color: "red" }}>{errors.password}</div> : null}

                          <button
                              type="submit"
                              style={{
                                  padding: "10px 20px",
                                  color: "white",
                                  backgroundColor: "#7685dd",
                                  borderRadius: "4px",
                                  borderColor: "#7685dd",
                                  margin: "0px 39%"
                              }}
                          >Submit</button>

              <div style={{ 
                display: "flex",
                justifyContent: "center",
                fontSize: "14px",
                marginTop: "5%"
               }}>
                <p style={{ marginRight: "5px" }}>Already have an account?</p>
                <NavLink to="/login" className="a2 log">Sign in</NavLink>
              </div>
         </Form>
       )}
     </Formik>
   </div>
   </div>
  )
}
