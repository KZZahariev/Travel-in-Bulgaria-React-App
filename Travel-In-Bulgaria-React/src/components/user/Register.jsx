import { useState } from "react"
import { Link } from "react-router-dom"

export default function Register() {

  const [userValue, setUserValue] = useState('');

  const changeSubmitHandler = (e) => {
      setUserValue(e.target.value)
  }

    return(
        <div className="min-h-screen flex items-center justify-center">
          <div className="bg-gray-800 p-8 shadow-md rounded-md w-96">
            <h2 className="text-slate-100 text-2xl font-semibold mb-4">Register</h2>
            <form >
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-500 text-sm font-medium">Full Name</label>
                <input type="text" id="name" name="name" value={userValue} onChange={changeSubmitHandler}
                  className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"/>
              </div>

              {/* username validation  */}
                <p className="text-red-500">
                  Username is required!
                </p>
                <p className="text-red-500" >
                  Username&apos;s length should be least 5 characters!
                </p>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-500 text-sm font-medium">Email</label>
                <input type="email" id="email" name="email" 
                  className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"/>
              </div>

              {/* Email validation  */}
             
                <p className="text-red-500" >
                  Email is required!
                </p>
                <p className="text-red-500" >
                  Email is not valid!
                </p>

         
                <div className="mb-4">
                  <label htmlFor="password" className="block text-gray-500 text-sm font-medium">Password</label>
                  <input type="password" id="password" name="password" placeholder="**********" 
                    className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"/>
                </div>
                {/* <!-- Password validator --> */}
              
                  <p className="text-red-500" >
                    Password is required!
                  </p>
                  <p className="text-red-500" >
                    Password must be at least 4 characters!
                  </p>

                <div className="mb-4">
                  <label htmlFor="rePassword" className="block text-gray-500 text-sm font-medium">Confirm Password</label>
                  <input type="password" id="rePassword" name="rePassword" placeholder="**********" 
                    className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"/>
                </div>

                {/* Confirm password validation  */}
             
                  <p className="text-red-500" >
                    Password does not match password!</p>
            


              <button
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Register</button>
            </form>
            <p className="text-sm text-gray-500 mt-4">Already have an account? 
            <a className="text-blue-500 hover:text-blue-600"><Link to={'/login'}>Login</Link></a></p>
          </div>
        </div>
    )
}