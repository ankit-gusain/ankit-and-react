import { Link } from "react-router-dom";

export default function About() {
    return (
        <div
            className="min-h-screen bg-cover bg-center flex items-center justify-center"
            style={{
                backgroundImage: "url(https://www.juit.ac.in/galleryimages/Library.JPG)",
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Opacity
                backgroundSize: "cover", // Ensure image covers entire screen
                backgroundPosition: "center", // Center the image
            }}
        >
            <div className="mx-auto px-24 py-24 text-center text-white bg-black  bg-opacity-50 ">

                <h1 className="text-4xl font-bold mb-4">About Us</h1>
                <p className="text-lg mb-8 font-semibold ">
                    Hii there  I am Ankit <br />
                    Welcome to my learning Hub! Here i dedicatedly implement the quality content and resources that i have learned and improve my learning journey. 🚀🚀🚀🚀
                </p>
                <Link
                    to="/contact"
                    className="text-lg text-white underline hover:text-gray-300"
                >
                    Contact Us
                </Link>
            </div>
        </div>
    );
}
