import { useState } from "react";
import PropTypes from 'prop-types';

function TextForm(props) {
    const [text, setText] = useState("enter the text");

    function changeHandler(event) {
        setText(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault();
        // You can do whatever you want with the submitted text here

        let upperText = text.toUpperCase();
        setText(upperText);
    }

    return (
        <div className="flex justify-center items-center h-screen bg-slate-900 text-white">
            <form action="" className="flex flex-col justify-center bg-gray-800 rounded-lg p-8 shadow-lg" onSubmit={submitHandler}>

                <h1 className="text-center text-3xl mb-6">{props.heading}</h1>
                <textarea className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500 w-full h-48 bg-gray-700 text-white" onChange={changeHandler} value={text}></textarea>

                <button type="submit" className="bg-blue-500 text-white rounded-md px-4 py-2 mt-4 hover:bg-blue-600 transition duration-300">Submit</button>

            </form>
        </div>
    )
}


TextForm.propTypes = {
    heading: PropTypes.string.isRequired,
};

export default TextForm;
