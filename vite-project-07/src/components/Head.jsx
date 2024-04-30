import React, { useState } from "react";
import Data from "./Data";
import Tours from "./Tours";

export default function TourList() {
    const [showTours, setShowTours] = useState(false);

    function handleButtonClick() {
        setShowTours(true);
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-3xl font-bold mb-6">Welcome to our Tours</h1>
            <button
                className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                onClick={handleButtonClick}
            >
                Show Tours
            </button>
            {showTours && (
                <div className="mt-8">
                    <Tours tours={Data} />
                </div>
            )}
        </div>
    );
}
