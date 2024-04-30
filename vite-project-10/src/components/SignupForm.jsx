import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function SignupForm({ setIsLoggedIn }) {
    const [data, setData] = useState({ firstname: "", lastname: "", email: "", password: "", confirmPassword: "" });
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate();
    
    function changeHandler(event) {
        setData((prevData => ({
            ...prevData,
            [event.target.name]: event.target.value
        })));
    }

    function submitHandler(event) {
        event.preventDefault();
        if (data.password !== data.confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account created successfully");
        const accountData = { ...data };
        console.log("Printing the account data:");
        console.log(accountData);
        navigate("/dashboard");
    }

    return (
        <div className="min-h-screen flex flex-col justify-center py-8">
            <div className="mx-auto">
                <div className="py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" onSubmit={submitHandler}>
                        <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                            <div className="w-full md:w-1/2">
                                <label htmlFor="firstname" className="block text-sm font-medium text-white">
                                    First name
                                </label>
                                <input
                                    id="firstname"
                                    name="firstname"
                                    type="text"
                                    autoComplete="given-name"
                                    required
                                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md bg-slate-800 text-white"
                                    value={data.firstname}
                                    onChange={changeHandler} />
                            </div>
                            <div className="w-full md:w-1/2">
                                <label htmlFor="lastname" className="block text-sm font-medium text-white">
                                    Last name
                                </label>
                                <input
                                    id="lastname"
                                    name="lastname"
                                    type="text"
                                    autoComplete="family-name"
                                    required
                                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md bg-gray-700 text-white"
                                    value={data.lastname}
                                    onChange={changeHandler} />
                            </div>
                        </div>
                        <div className="w-full">
                            <label htmlFor="email" className="block text-sm font-medium text-white">
                                Email address
                            </label>
                            <input id="email" name="email" type="email" autoComplete="email" required
                                className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md bg-gray-700 text-white"
                                value={data.email} onChange={changeHandler} />
                        </div>
                        <div className="w-full">
                            <label htmlFor="password" className="block text-sm font-medium text-white">
                                Password
                            </label>
                            <input 
                                id="password" 
                                name="password" 
                                type={showPass ? "text" : "password"} 
                                autoComplete="new-password"
                                required
                                className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md bg-gray-700 text-white"
                                value={data.password} 
                                onChange={changeHandler}
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-white">
                                Confirm password
                            </label>
                            <input id="confirmPassword" name="confirmPassword" type={showPass ? "text" : "password"} autoComplete="new-password" required
                                className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md bg-gray-700 text-white"
                                value={data.confirmPassword} onChange={changeHandler} />
                        </div>
                        <div>
                            <button type="submit"
                                className="w-full py-3 px-4 border border-transparent text-m font-medium rounded-md text-white bg-green-600 hover:bg-slate-300 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
                                Create Account
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}





















// import { useState } from "react"
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// export default function SignupForm({ setIsLoggedIn }) {
//     const [data, setData] = useState({ firstname: "", lastname: "", email: "", password: "", confirmPassword: "" })

//     const [showPass, setShowPass] = useState(false)

//     const navigate = useNavigate();
    
//     function changeHandler(event) {
//         setData((prevData => (
//             {
//                 ...prevData,
//                 [event.target.name]: event.target.value
//             }
//         )))

//     }

//     function submitHandler(event) {
//         event.preventDefault();
//         if (data.password != data.confirmPassword) {
//             toast.error("password donot match");
//             return;
//         }
//         setIsLoggedIn(true)
//         toast.success("account created succesfully");
//         const accountData = {
//             ...data
//         };

//         console.log("printing the account data");
//         console.log(accountData)

//         navigate("/dashboard")
//     }
//     return (
//         <>
//             <div>
//                 {/* student instructor tab */}
//                 <div>
//                     <button>student</button>
//                     <button>instructor</button>
//                 </div>

//                 <form action="" onSubmit={submitHandler}>
//                     {/* first name and last name */}
//                     <div>
//                         <label>
//                             <p>First name <sup>*</sup></p>
//                             <input
//                                 required
//                                 type="text"
//                                 name="firstname"
//                                 onChange={changeHandler}
//                                 value={data.firstname}
//                             />
//                         </label>

//                         <label>
//                             <p>last name <sup>*</sup></p>
//                             <input
//                                 required
//                                 type="text"
//                                 name="lastname"
//                                 onChange={changeHandler}
//                                 value={data.lastname}
//                             />
//                         </label>
//                     </div>

//                     {/* email address */}
//                     <label>
//                         <p>Email address <sup>*</sup></p>
//                         <input
//                             required
//                             type="email"
//                             name="email"
//                             onChange={changeHandler}
//                             value={data.email}
//                         />

//                     </label>

//                     {/* create password  and confirm password*/}
//                     <div>
//                         <label>
//                             <p>Create Password <sup>*</sup></p>
//                             <input
//                                 required
//                                 type={showPass ? ("text") : ("password")}
//                                 name="password"
//                                 onChange={changeHandler}
//                                 value={data.password}
//                             />

//                         </label>

//                         <label>
//                             <p>Confirm Password <sup>*</sup></p>
//                             <input
//                                 required
//                                 type={showPass ? ("text") : ("password")}
//                                 name="confirmPassword"
//                                 onChange={changeHandler}
//                                 value={data.confirmPassword}
//                             />

//                         </label>
//                     </div>
//                     <button type="submit">
//                         Create Account
//                     </button>

//                 </form>
//             </div>
//         </>
//     )
// }



