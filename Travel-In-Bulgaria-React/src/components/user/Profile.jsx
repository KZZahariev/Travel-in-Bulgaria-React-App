const Profile = () => {

    return(
        <>
        <div className="transform transition-all hover:scale-105 max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
            <div className="rounded-t-lg h-32 overflow-hidden">
                <img className="object-cover object-top w-full"
                    src='https://i0.wp.com/theconstructor.org/wp-content/uploads/2019/08/diego-jimenez-A-NVHPka9Rk-unsplash.jpg?fit=5472%2C3648&ssl=1'
                    alt='road'/>
            </div>
            <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                <img className="object-cover object-center h-32"
                    src='https://www.transparentpng.com/thumb/user/blue-male-user-profile-transparent-png-2lbgMx.png'
                    alt='Woman looking front'/>
            </div>
                <div className="text-center mt-2">
                    <h2 className="font-semibold"></h2>
                    <p className="text-gray-500"></p>
                </div>
                <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
                    <li className="flex flex-col items-center justify-around">
                        <img className="w-10 fill-current text-blue-900"
                            src="https://cdn.pixabay.com/photo/2022/01/27/21/37/delivery-6973178_960_720.png" alt="car"/>
                        <div></div>
                    </li>
                </ul>
                <div className="p-4 border-t  mt-2 inline-flex justify-center items-center space-x-7">
                    <button
                        className="block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white py-3 w-40 mr-1" >Edit profile</button>
                    <button
                        className="block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white py-3 w-40 mr-1" >Add post</button>
                </div>
            
                <form >
                    <div className="text-center mt-2">
                        <div>
                            <h2 className="font-semibold">Username: </h2>
                            <input type="text" id="username" />
                        </div>
                        <div>
                            <p className="text-gray-500">Email: </p>
                            <input type="email" id="email" />
                        </div>
                    </div>
                    <div className="p-4 border-t  mt-2 inline-flex justify-center items-center space-x-7">
                        <button
                            className="block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white py-3 w-40 mr-1">Save</button>
                        <button
                            className="block mx-auto rounded-full bg-red-500 hover:shadow-lg font-semibold text-white py-3 w-40 mr-1">Cancel</button>
                    </div>
                </form>
        </div>
        </>
    )
}

export default Profile;