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
        console.log('GetDerivedStateFromError');
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
                </main>
            )
        }
        return this.props.children;
    }
}