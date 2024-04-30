import { useState } from "react";

export default function Cards({ name, price, date }) {
    const [showName, setShowName] = useState(false);

    function toggleName() {
        setShowName(!showName);
    }

    return (
        <>
            <div className="border p-5 m-5 bg-green-900">
                <p className="border p-3 bg-slate-800 text-center pp">{showName ? name : "nirma"}</p>
                <p className="text-center p-3">price: {price}</p>
                <p className="text-center">date: {date}</p>
                <button className="border p-2 m-4 bg-slate-700" onClick={toggleName}>
                    {showName ? "code Name" : "Show Name"}
                </button>
            </div>
        </>
    );
}
