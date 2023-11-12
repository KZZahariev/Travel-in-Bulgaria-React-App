const AnnouncementsList = () => {

    return(
        // <div className="bg-red-500 text-2xl" *ngIf="!errorFetchingData">Error loading announcements</div>

            <div className="bg-cover flex flex-col min-h-screen bg-fixed bg-[url(./assets/asphalt-highway.jpg)]">
                <div className="grid grid-cols-1 md:grid-cols-3 pt-5 m-6  opacity-90">
                    <div 
                        className="transform transition-all hover:scale-105 p-2 mb-12 flex-nowrap no-scrollbar flex items-center justify-center">
                        <div className="bg-gray-800 p-8 shadow-md rounded-md w-96">
                            <h2 className="text-slate-100 text-2xl font-semibold mb-4"> posted</h2>
                            <div className="mb-4">
                                <ul className="p-2 flex flex-nowrap">
                                </ul>
                                <ul>
                                    <li className="mr-2 mb-2">
                                        <label htmlFor="from" className="block text-gray-500 text-sm font-medium">From: <span
                                                className="text-white">
                                                </span></label>
                                    </li>
                                    <li className="mr-2 mb-2">
                                        <label htmlFor="to" className="block text-gray-500 text-sm font-medium">To: <span className="text-white">
                                                </span></label>
                                    </li>
                                    <li className="mr-7 mb-2">
                                        <label htmlFor="price" className="block text-gray-500 text-sm font-medium">Price of ticket: <span
                                                className="text-white">
                                                </span></label>
                                    </li>
                                </ul>
                            </div>
                            <ul className="">
                                <li className="transform transition-all hover:scale-105 p-2 flex flex-nowrap">
                                    <button 
                                        className="w-full flex justify-center bg-gray-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Details</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        
    )
}

export default AnnouncementsList;