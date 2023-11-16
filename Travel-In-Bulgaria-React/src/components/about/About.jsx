export default function About() {

    return(
        <div className="bg-cover flex flex-col min-h-screen bg-fixed bg-[url(./assets/photo-1465774124747-65ab0913fb9e.jfif)]">
            <div className="min-h-screen flex items-center justify-center">
                <div className="bg-gray-500 p-8 shadow-md rounded-md w-3/4 my-10 opacity-90 mx-auto mt-8 ">
                    <div className="mb-4 ">
                        <div className="p-10 mb-0 flex-nowrap no-scrollbar flex items-center justify-center">
                            <div className="">
                                <h2 className="text-slate-700 text-4xl font-semibold mb-4">About us</h2>
                            </div>
                        </div>
                        <div className="text-gray-950 font-semibold text-2xl my-2 bg-center">
                            <h3>This site is designed for facilitation of the travel people in Bulgaria. Through this
                                site you can post and search easy and cozily another people, which will travel in the same
                                direction. Our purpose is to help you don’t chase the bus and don’t be afraid of their drivers.
                                One of the priority of this way traveling is that you can choose the driver or your passengers.
                                If you travel alone, you should pay the whole amount for the fuel from point A to point B, but
                                if you share your traveling with somebody and you find pleasant company for this traveling,
                                you can even save money.</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}