import { useState } from "react";

function CreateForm() {
    const [pass1, setPass1] = useState("");
    const [pass2, setPass2] = useState("");
    const [result, setResult] = useState(""); // New state for displaying result

    function handlePass1Change(e) {
        setPass1(e.target.value);
    }

    function handlePass2Change(e) {
        setPass2(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (pass1 === pass2) {
            setResult(`Password: ${pass1}`);
        } else {
            setResult("Passwords do not match");
        }
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="max-w-md bg-neutral-800 rounded p-6 shadow-md ">
                <h2 className="text-2xl font-semibold mb-4 text-center text-gray-400">Create Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-slate-500">Name:</label>
                        <input type="text" id="name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-sm px-2 bg-gray-500" placeholder="Enter the name" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-slate-500 ">New Password:</label>
                        <input type="password" id="password" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-sm bg-gray-500 px-2" placeholder="New Password" onChange={handlePass1Change} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="confirm-password" className="block text-sm font-medium text-slate-500">Re-enter Password:</label>
                        <input type="password" id="confirm-password" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full  px-2 shadow-sm sm:text-sm border-gray-300 rounded-sm bg-gray-500" placeholder="Confirm Password" onChange={handlePass2Change} />
                    </div>
                    <div className="mt-4">
                        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-grey-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Submit
                        </button>
                    </div>
                </form>
                <p className="text-white mt-4">{result}</p>
            </div>
        </div>
    );
}

export default CreateForm;
