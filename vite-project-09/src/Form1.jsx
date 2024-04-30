import { useState } from "react";

export default function Form1() {
    const [formData, setFormData] = useState({ firstname: "", lastName: "", email: "", comment: "", isVisible: true, mode: "", cars: "" });

    console.log(formData);

    function changeHandler(event) {
        const { name, value, type, checked } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }));
    }

    function submitHandler(e) {
        e.preventDefault();
        console.log("-------------------------");
        console.log("all details");
        console.log(formData);
    }

    return (
        <div className="container mx-auto mt-8">
            <form className="w-full max-w-lg" onSubmit={submitHandler}>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstname">First Name</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="First Name"
                        onChange={changeHandler}
                        name="firstname"
                        value={formData.firstname}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastname">Last Name</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Last Name"
                        onChange={changeHandler}
                        name="lastName"
                        value={formData.lastName}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="email"
                        placeholder="Email"
                        onChange={changeHandler}
                        name="email"
                        value={formData.email}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="comment">Comment</label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Comment"
                        onChange={changeHandler}
                        name="comment"
                        value={formData.comment}
                    />
                </div>
                <div className="mb-6">
                    <input
                        type="checkbox"
                        name="isVisible"
                        onChange={changeHandler}
                        id="isVisible"
                        checked={formData.isVisible}
                    />
                    <label className="text-gray-700 ml-2" htmlFor="isVisible">Am I visible</label>
                </div>
                <div className="mb-6">
                    <input
                        type="radio"
                        name="mode"
                        value="online-mode"
                        id="online-mode"
                        checked={formData.mode === "online-mode"}
                        onChange={changeHandler}
                    />
                    <label className="text-gray-700 ml-2" htmlFor="online-mode">Online mode</label>
                    <input
                        type="radio"
                        name="mode"
                        value="offline-mode"
                        id="offline-mode"
                        checked={formData.mode === "offline-mode"}
                        onChange={changeHandler}
                    />
                    <label className="text-gray-700 ml-2" htmlFor="offline-mode">Offline mode</label>
                </div>
                <div className="mb-6">
                    <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="cars"
                        id="cars"
                        value={formData.cars}
                        onChange={changeHandler}
                    >
                        <option value="">Select your favorite car</option>
                        <option value="maruri">Maruri</option>
                        <option value="lamborghini">Lamborghini</option>
                        <option value="rolls-royce">Rolls Royce</option>
                        <option value="bucati">Bucati</option>
                        <option value="nano">Nano</option>
                        <option value="maruti">Maruti</option>
                        <option value="BMW">BMW</option>
                        <option value="Audi">Audi</option>
                        <option value="forutner">Fortuner</option>
                        <option value="defender">Defender</option>
                        <option value="ford">Ford</option>
                    </select>
                </div>
                <div className="mb-6">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </form>
            {/* Display form data */}
            <div className="mt-8">
                <h2 className="text-xl font-bold mb-2">Form Data:</h2>
                <div>
                    <p><span className="font-bold">First Name:</span> {formData.firstname}</p>
                    <p><span className="font-bold">Last Name:</span> {formData.lastName}</p>
                    <p><span className="font-bold">Email:</span> {formData.email}</p>
                    <p><span className="font-bold">Comment:</span> {formData.comment}</p>
                    <p><span className="font-bold">Is Visible:</span> {formData.isVisible.toString()}</p>
                    <p><span className="font-bold">Mode:</span> {formData.mode}</p>
                    <p><span className="font-bold">Cars:</span> {formData.cars}</p>
                </div>
            </div>
        </div>
    );
}
