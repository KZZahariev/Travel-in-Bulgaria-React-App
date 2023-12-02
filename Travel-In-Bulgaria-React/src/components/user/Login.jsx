import { useContext } from "react";
import { Link } from "react-router-dom"
import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";

const RegisterFormKeys = {
    Email: 'email',
    Password: 'password',
};

export default function Login() {

    const { loginSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(loginSubmitHandler , {
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Password]: ''
    })

    return(
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-gray-800 p-8 shadow-md rounded-md w-96">
                <h2 className="text-slate-100 text-2xl font-semibold mb-4">Login</h2>
                <form onSubmit={onSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-500 text-sm font-medium">Email</label>
                        <input 
                            type="email"
                            id="email" 
                            name="email" 
                            value={values[RegisterFormKeys.Email]} 
                            onChange={onChange}
                            className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0">
                        </input>
                            <p className="text-red-500">
                                Email is required!
                            </p>
                            <p className="text-red-500">
                                Email is not valid!
                            </p> 

                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-500 text-sm font-medium">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            value={values[RegisterFormKeys.Password]} 
                            onChange={onChange}
                            className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0">
                            
                        </input>
                            <p className="text-red-500">
                                Password is required!
                            </p>
                            <p className="text-red-500" >
                                Password must be at least 4 characters!
                            </p>
                        

                    </div>
                    <button
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Login</button>
                </form>
                <p className="text-sm text-gray-500 mt-4">Don&apos;t have an account? <a
                        className="text-blue-500 hover:text-blue-600"><Link to={'/register'}>Register</Link></a></p>
            </div>
        </div>
    )
}