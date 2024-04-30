import { useNavigate } from "react-router-dom";

export default function Home() {
    const goto = useNavigate();

    function gotoAbout() {
        goto("/About");
    }

    function goback() {
        goto(-1);
    }

    return (
        <div className="text-center">
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                onClick={gotoAbout}
            >
                Go to About
            </button>
            <br />
            <div className="my-4">This is the Home page</div>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={goback}
            >
                Go Back
            </button>
        </div>
    );
}
