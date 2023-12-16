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
});

export const createAnnouncement = yup.object().shape({
    from: yup.string().min(2, '"From" must be at least 2 characters long.').required('"From" is required.'),
    to: yup.string().min(2, '"To" must be at least 2 characters long.').required('"To" is required.'),
    price: yup.number().required('"Price" is required.'),
    date: yup.date().required('"Date" is required.'),
    seats: yup.number().required('"Seats" is required.'),
    description: yup.string().min(5, '"Description" must be at least 5 characters long.').required('"Description" is required.')
});

export const editProfileSchema = yup.object().shape({
    username: yup.string().min(5, "Username must be at least 5 characters").required("Username is required!"),
    email: yup.string().email('Email is not valid!').required("Email is required!"),
});

export const editAnnouncementSchema = yup.object().shape({
    from: yup.string().min(2, '"From" must be at least 2 characters long.').required('"From" is required.'),
    to: yup.string().min(2, '"To" must be at least 2 characters long.').required('"To" is required.'),
    price: yup.number().required('"Price" is required.'),
    date: yup.date().required('"Date" is required.'),
    seats: yup.number().required('"Seats" is required.'),
    description: yup.string().min(5, '"Description" must be at least 5 characters long.').required('"Description" is required.')
});

export const addCommentSchema = yup.object().shape({
    comment: yup.string().required("Comment is required!"),
});