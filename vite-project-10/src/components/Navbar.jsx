import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Navbar({ setIsLoggedIn, isLoggedIn }) {
    return (
        <>
            <ToastContainer />
            <nav className="bg-teal-950     text-white py-4 px-8 flex justify-between items-center">
                <ul className="flex space-x-8">
                    <li>
                        <Link to="/Home">Home</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                    <li>
                        <Link to="/Contact">Contact</Link>
                    </li>
                </ul>
                <div className="flex space-x-8">
                    {!isLoggedIn && (
                        <Link to="/Login">
                            <button className="bg-slate-800 hover:bg-slate-600 text-white py-2 px-4 rounded transition duration-300">Login</button>
                        </Link>
                    )}
                    {!isLoggedIn && (
                        <Link to="/Signup">
                            <button className="bg-zinc-700 hover:bg-zinc-500 text-white py-2 px-4 rounded transition duration-300">Sign Up</button>
                        </Link>
                    )}
                    {isLoggedIn && (
                        <Link to="/Home">
                            <button
                                onClick={() => {
                                    setIsLoggedIn(false);
                                    toast.success("Logged out");
                                }}
                                className="bg-zinc-700 hover:bg-zinc-500 text-white py-2 px-4 rounded transition duration-300"
                            >
                                Logout
                            </button>
                        </Link>
                    )}
                    {isLoggedIn && (
                        <Link to="/Dashboard">
                            <button className="bg-zinc-700 hover:bg-zinc-500 text-white py-2 px-4 rounded transition duration-300">Dashboard</button>
                        </Link>
                    )}
                </div>
            </nav>
        </>
    );
}












// import { Link } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function Navbar({ setIsLoggedIn, isLoggedIn }) {
//     return (
//         <>
//             <ToastContainer /> {/* Add the ToastContainer component here */}
//             <nav>
//                 <ul>
//                     <li>
//                         <Link to="/Home"> Home </Link>
//                     </li>
//                     <li>
//                         <Link to="/About">About</Link>
//                     </li>
//                     <li>
//                         <Link to="/Contact">Contact</Link>
//                     </li>
//                 </ul>
//             </nav>

//             <div>
//                 {!isLoggedIn && (
//                     <Link to="/Login">
//                         <button>Login</button>
//                     </Link>
//                 )}

//                 {!isLoggedIn && (
//                     <Link to="/Signup">
//                         <button>Sign Up</button>
//                     </Link>
//                 )}

//                 {isLoggedIn && (
//                     <Link to="/Home">
//                         <button
//                             onClick={() => {
//                                 setIsLoggedIn(false);
//                                 toast.success("Logged out");
//                             }}
//                         >
//                             Logout
//                         </button>
//                     </Link>
//                 )}

//                 {isLoggedIn && (
//                     <Link to="/Dashboard">
//                         <button>Dashboard</button>
//                     </Link>
//                 )}
//             </div>
//         </>
//     );
// }
