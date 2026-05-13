import React from 'react';
import {Button, Form} from "semantic-ui-react";
import {useFormik} from "formik";
import * as Yup from "yup";
import "./LoginForm.scss";


export function LoginForm() {
 const formik = useFormik({
  initialValues: initialValues(),
  validationSchema: Yup.object(validationSchema()),
  onSubmit: (formValue) => {
   console.log("Formulario enviado");
   console.log(formValue);
  }
});

  return (
    <Form className="login-form-admin" onSubmit={formik.handleSubmit}>
    <Form.Input 
    name="email" 
    placeholder="Correo electronico" 
    value={formik.values.email} 
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    error={formik.errors.email? {content: formik.errors.email, pointing: 'below'}:null }
    />
    <Form.Input name="password" type="password" 
    placeholder="Contraseña"  
    value={formik.values.password} 
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    error={formik.errors.password ?{content: formik.errors.password, pointing: 'below'}:null}
    />
    <Button type="submit" 
    content="Iniciar Sesion" primary fluid
    />
    </Form>
  );
}

function initialValues(){
  return{
      email: "",
      password: "",
  }
}

function validationSchema() {
  return {
    email: Yup.string()
      .email("El formato parece incorrecto") // Mensaje si el formato es malo
      .required("Necesitamos tu correo para entrar"), // Mensaje si está vacío
    password: Yup.string()
      .required("No olvides tu contraseña"),
      
  };
}