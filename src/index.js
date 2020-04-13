import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import { TextField, MaskedTextField } from 'office-ui-fabric-react/lib/TextField';
import { PrimaryButton } from 'office-ui-fabric-react';


// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues

const validate = values => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
      errors.firstName = 'Must be 15 characters or less';
    }
  
    if (!values.lastName) {
      errors.lastName = 'Required';
    } else if (values.lastName.length > 20) {
      errors.lastName = 'Must be 20 characters or less';
    }
  
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    return errors;
}  





const SignupForm = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      //MS Form Field;
      message: '',

    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>

      <TextField label="First Name" placeholder="Must be 20 characters or less" {...formik.getFieldProps('firstName')} />
      {formik.touched.firstName && formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}

      <TextField label="Last Name:" placeholder="Must be 20 characters or less" {...formik.getFieldProps('lastName')} />
      {formik.touched.lastName && formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}

      <TextField type="email" label="Email:"  placeholder="e.x. Example@example.com" {...formik.getFieldProps('email')} />
      {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}

      <TextField type="textarea" label="Message:" placeholder="Please write your message here and we will get back to you as soon as we can." multiline rows={6} {...formik.getFieldProps('message')} />
      {formik.touched.email && formik.errors.message ? <div>{formik.errors.message}</div> : null}

      <PrimaryButton style={{margin: "20px 0px", padding: "30px", textTransform: "uppercase"}} text="Submit" type="submit" />

    </form>
  );
};  
  // ========================================
  
  ReactDOM.render(
    <SignupForm />,
    document.getElementById('root')
  );
  