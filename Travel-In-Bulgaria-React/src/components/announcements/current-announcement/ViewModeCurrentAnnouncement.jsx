/* eslint-disable react/prop-types */


export default function ViewModeCurrentAnn({
    from,
    to,
    price,
    date,
    seats,
    description,
}) {

    return(
        <div className="p-10 mb-12 flex-nowrap no-scrollbar flex items-center justify-center opacity-90">
            <div className="bg-gray-800 p-8 shadow-md rounded-md w-96 transform transition-all hover:scale-105">
                <h2 className="text-slate-100 text-2xl font-semibold mb-4"></h2>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-500 text-sm font-medium my-2">I&apos;m
                        travel</label>
                    <label htmlFor="title" className="block text-gray-500 text-sm font-medium my-2">Do you want
                        to travel</label>
                    <ul>
                        <li className="mr-2 mb-2">
                            <label htmlFor="from" className="block text-gray-500 text-sm font-medium">From: <span
                                    className="text-white">
                                    {from}</span></label>
                        </li>
                        <li className="mr-2 mb-2">
                            <label htmlFor="to" className="block text-gray-500 text-sm font-medium">To: <span
                                    className="text-white">
                                    {to}</span></label>
                        </li>
                        <li className="mr-7 mb-2">
                            <label htmlFor="price" className="block text-gray-500 text-sm font-medium">Price of ticket: <span
                                    className="text-white">
                                    {price}</span></label>
                        </li>
                        <li className="mr-7 mb-2">
                            <label htmlFor="date" className="block text-gray-500 text-sm font-medium">Date: <span
                                    className="text-white">
                                    {date}</span></label>
                        </li>
                        <li className="mr-7 mb-2">
                            <label htmlFor="seats" className="block text-gray-500 text-sm font-medium">Number of seats: <span
                                    className="text-white">
                                    {seats}</span></label>
                        </li>
                        <li className="mr-7 mb-2">
                            <label htmlFor="description" className="block text-gray-500 text-sm font-medium">Description: <span
                                    className="text-white">
                                    {description}</span></label>
                        </li>

                    </ul>
                </div>
                <ul >
                    <ul >
                        <li className="p-2 flex flex-nowrap">
                            <button className="transform transition-all hover:scale-105 w-full flex justify-center bg-gray-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >Edit</button>
                        </li>
                        <li className="p-2 flex flex-nowrap">
                            <button className="transform transition-all hover:scale-105 w-full flex justify-center bg-gray-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >Delete</button>
                        </li>
                    </ul>
                    <ul >
                        <li className="p-2 flex flex-nowrap" >
                            <h3
                                className="w-full flex justify-center text-white py-2  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                You are already reserved.</h3>
                        </li>
                        <li className="transform transition-all hover:scale-105 p-2 flex flex-nowrap" >
                            <button className="w-full flex justify-center bg-gray-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >Reserve</button>
                        </li>
                    </ul>
                </ul>
                <li className="transform transition-all hover:scale-105 p-2 flex flex-nowrap">
                    <button className="w-full flex justify-center bg-gray-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                       >Back</button>
                </li>
            </div>
        </div>
    )
}