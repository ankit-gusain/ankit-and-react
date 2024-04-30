import { useNavigate } from "react-router-dom";

export default function Contact() {
    const goto = useNavigate();

    function goHome() {
        goto("/home");
    }

    function goAbout() {
        goto("/about");
    }

    function goback() {
        goto(-1);
    }

    return (
        <div className="text-center mx-auto max-w-lg mt-8">
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                onClick={goHome}
            >
                Go to Home
            </button>
            <p className="my-4">
                This is the Contact page. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eius voluptatem sequi, dicta enim provident, earum odit, dolore praesentium
                ab quo quis nobis libero magni? Lorem ipsum dolor sit amet consectetur adipis.
            </p>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                onClick={goAbout}
            >
                Go to About
            </button>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={goback}
            >
                Go Back
            </button>
        </div>
    );
}
