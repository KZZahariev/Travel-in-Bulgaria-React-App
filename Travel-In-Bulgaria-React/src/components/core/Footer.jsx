import { Link } from "react-router-dom";

export default function Footer() {

    return(
        <div className=" dark:bg-gray-800">
        <div className="max-w-2xl mx-auto text-white py-10">
            <div className="text-center">
                <h3 className="text-2xl mb-3"> Download our travel app </h3>
                <p> Make your travel easier! </p>
                <div className="flex justify-center my-5">
                    <Link to={"https://play.google.com/store/games?device=windows"}><div className="flex items-center border rounded-lg px-4 py-2 w-52 mx-2">
                        <a href="https://play.google.com/store/games?device=windows"></a>
                        <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" className="w-7 md:w-8" />
                        <div className="text-left ml-3">
                            <p className='text-xs text-gray-200'>Download on </p>
                            <p className="text-sm md:text-base"> Google Play Store </p>
                        </div>
                    </div></Link>
                    <Link to={"https://www.apple.com/store"}><div className="flex items-center border rounded-lg px-4 py-2 w-44 mx-2">
                        <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" className="w-7 md:w-8" />
                        <div className="text-left ml-3">
                            <p className='text-xs text-gray-200'>Download on </p>
                           <p className="text-sm md:text-base"> Apple Store </p>
                        </div>
                    </div></Link>
                </div>
            </div>
            <div className="mt-5 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
                <p className="order-2 md:order-1 mt-8 md:mt-0"> &copy; Travel in Bulgaria, 2023.</p>
                <div className="order-1 md:order-2">
                    <Link to={"/about"}><a className="px-2">About us</a></Link>
                    <Link to={"/"}><a className="px-2 border-l">Home</a></Link>
                </div>
            </div>
        </div>
    </div>
        
    );

}