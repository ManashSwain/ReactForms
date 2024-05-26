import * as Yup from 'yup' ;


export const loginSchema =  Yup.object({
 name : Yup.string().min(2).max(25).required("Name is a required field"),
 email : Yup.string().email().required("Email is a required field"),
 password : Yup.string().min(6).max(18).required("Password is a required field"),
 confirm_password : Yup.string().required("Confirm password is a required field").oneOf([Yup.ref("password"), null] , "Password much match")
})