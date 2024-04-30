import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "./Footer";

export default function ContentPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <main className="flex-1">
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Welcome to Content Page</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-6 bg-white shadow-md rounded-lg">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Learn Something New</h2>
                            <p className="text-lg text-gray-700 mb-4">Discover new ideas, concepts, and skills to expand your knowledge with great Learning.</p>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300">Start Learning</button>
                        </div>
                        <div className="p-6 bg-white shadow-md rounded-lg">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Connect with Others</h2>
                            <p className="text-lg text-gray-700 mb-4">Join a community of learners, mentors, and experts to collaborate and share ideas.</p>
                            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-300">Join Community</button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
