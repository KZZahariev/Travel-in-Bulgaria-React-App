import * as yup from "yup";

export const registerSchema = yup.object().shape({
    username: yup.string().min(5, "Username must be at least 5 characters").required("Username is required!"),
    email: yup.string().email('Email is not valid!').required("Email is required!"),
    password: yup.string().min(5, "Password must be at least 5 characters").required("Password is required!"),
    rePassword: yup.string().oneOf([yup.ref('password')], "Password must match").required("Confirm password is required!")
});

export const loginSchema = yup.object().shape({
    email: yup.string().email('Email is not valid!').required("Email is required!"),
    password: yup.string().min(5, "Password must be at least 5 characters").required("Password is required!"),
})