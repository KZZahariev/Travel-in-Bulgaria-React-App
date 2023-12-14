/* eslint-disable no-unused-vars */
/* eslint-disable no-mixed-spaces-and-tabs */
import { Component } from "react";
import { Link } from "react-router-dom";

export default class ErrorBoundary extends Component {
    constructor() {
        super()

        this.state = { hasError: false }
    }

    static getDerivedStateFromError(err) {
        return { hasError: true }
    }

    componentDidCatch(error, errorInfo) {
        console.log(error);
        console.log(errorInfo);
    }

    render(){
        if (this.state.hasError) {
            return (
                <main className="h-screen w-full flex flex-col justify-center items-center dark:bg-gray-800">
	                <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
	                <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
	                	Oops... Something went wrong.
	                </div>
	                <Link to={'/'}><button className="mt-5">
                      <a className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
                        <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>
                        <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
                        <a>Go to home</a>
                        </span>
                      </a>
                    </button></Link>
                </main>
            )
        }
    }
}