import React from 'react' ;
import './forms.css';
import {useFormik} from 'formik';
import { loginSchema } from '../schemas/loginschema';
import warning from '../images/exclamation.png'


const initialValues = {
    name : "",
    email : "",
    password : "",
    confirm_password : ""
}

const forms = () => {

    const {values , errors , handleChange , handleSubmit ,touched , handleBlur} = useFormik({
    initialValues : initialValues , 
    validationSchema : loginSchema ,
    onSubmit : (values , action)=>{
      action.resetForm();
    //   console.log(values);
    }

    });



  return (
    <>
    <div className="container">
        <h2>Form handling and validation using formik and yup</h2>
        <form onSubmit={handleSubmit}>
            <div className="formitem">
                <label htmlFor="name">Name</label>
                <input 
                 type="name"
                 name='name' 
                 id='name' 
                 placeholder='Enter your name'
                 value={values.name} 
                 onChange={handleChange}
                 onBlur={handleBlur}
                 />
                 {errors.name && touched.name ? <p><img className='warning' src={warning} alt="warning" />{errors.name}</p> : null}
            </div>
            <div className="formitem">
                <label htmlFor="email">Email</label>
                <input 
                 type="email"
                 name='email' 
                 id='email' 
                 placeholder='Enter your Email ID'
                 value={values.email} 
                 onChange={handleChange}
                 onBlur={handleBlur}
                 />
                 {errors.email && touched.email ? <p><img className='warning' src={warning} alt="warning" />{errors.email}</p> : null}
            </div>
            <div className="formitem">
                <label htmlFor="password">Password</label>
                <input 
                 type="password"
                 name='password' 
                 id='password' 
                 placeholder='Please fill the password'
                 value={values.password} 
                 onChange={handleChange}
                 onBlur={handleBlur}
                 />
                 {errors.password && touched.password ? <p><img className='warning' src={warning} alt="warning" />{errors.password}</p> : null}
            </div>
            <div className="formitem">
                <label htmlFor="confirm_password">Confirm Password</label>
                <input 
                 type="password"
                 name='confirm_password' 
                 id='confirm_password' 
                 placeholder='Please fill the confirm password'
                 value={values.confirm_password} 
                 onChange={handleChange}
                 onBlur={handleBlur}
                 />
                 {errors.confirm_password && touched.confirm_password ? <p><img className='warning' src={warning} alt="warning" />{errors.confirm_password}</p> : null}
            </div>
            <div className="formitem">
                <input
                className='submit' 
                 type="submit"
                 name='submit' 
                 id='submit'
                 value='Submit' 
                 />
            </div>
        </form>
    </div>
    </>
  )
}

export default forms
