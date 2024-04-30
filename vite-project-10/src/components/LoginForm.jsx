import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function LoginForm({ setIsLoggedIn }) {
    const navigate = useNavigate();
    const [data, setData] = useState({ email: "", password: "" });
    const [showPass, setShowPass] = useState(false);

    function changeHandler(event) {
        setData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        }));
    }

    function submitHandler(event) {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged in successfully");
        navigate("/dashboard");
    }

    return (
        <div className="min-h-screen flex items-center justify-center px-2 ">
            <div className="w-2/3">
                <div>
                    <h2 className=" text-center text-3xl font-extrabold text-white">Sign in to your account</h2>
                </div>


                <form className="mt-8 space-y-6" onSubmit={submitHandler}>
                    <input
                        type="hidden"
                        name="remember"
                        value="true"
                    />

                    <div>
                        <div>
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input id="email-address" name="email" type="email" autoComplete="email" required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 my-2 bg-gray-800 border border-gray-600 placeholder-gray-500 text-white rounded-t-md focus:outline-none focus:ring-white focus:border-white focus:z-10 sm:text-sm"
                                placeholder="Email address" value={data.email} onChange={changeHandler} />
                        </div>

                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input
                                id="password"
                                name="password"
                                type={showPass ? "text" : "password"}
                                autoComplete="current-password"
                                required
                                placeholder="Password"
                                value={data.password}
                                onChange={changeHandler}
                                className="appearance-none rounded-none relative block w-full px-3 py-2 bg-gray-800 border border-gray-600 placeholder-gray-500 text-white rounded-b-md focus:outline-none focus:ring-white focus:border-white focus:z-10 sm:text-sm"
                            />
                        </div>
                    </div>

                    <div className="flex item   s-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-green-800 focus:ring-green-800 border-gray-300 rounded"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-white">Remember me</label>
                        </div>

                        <div className="text-sm">
                            <Link to="#" className="font-medium text-gray-400  hover:text-gray-200 ">Forgot your password?</Link>
                        </div>
                    </div>

                    <div>
                        <button type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-slate-300">
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}























// import { useState } from "react"
// import { Link, useNavigate } from "react-router-dom"
// import { toast } from "react-toastify"


// export default function LoginForm({ setIsLoggedIn }) {

//     const navigate  = useNavigate();

//     const [data, setData] = useState({ email: "", password: "", })
//     const [showPass, setShowPass] = useState(false)

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

//         setIsLoggedIn(true);
//         toast.success("logged in successfully");
//         navigate("/dashboard")
//     }

//     return (
//         <>
//             <form action="" onSubmit={submitHandler}>

//                 {/* email Address */}
//                 <label>
//                     <p>Email address <sup>*</sup></p>
//                     <input
//                         required
//                         type="email"
//                         value={data.email}
//                         placeholder="enter the email address"
//                         onChange={changeHandler}
//                         name="email"
//                     />
//                 </label>

//                 {/* password */}
//                 <label>
//                     <p>Password<sup>*</sup></p>
//                     <input
//                         required
//                         type={showPass ? ("text") : ("password")}
//                         value={data.password}
//                         placeholder="enter the password"
//                         onChange={changeHandler}
//                         name="password"
//                     />

//                     <Link to="#">
//                         <p>Forgot Password</p>
//                     </Link>
//                 </label>
//             </form>
//             <button type="submit">Sign in</button>
//         </>
//     )
// }