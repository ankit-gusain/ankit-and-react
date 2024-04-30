import frame from "../assets/frame.png";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

export default function Template({ title, desc1, desc2, image, formtype, setIsLoggedIn }) {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center bg-black text-white py-12 px-4 sm:px-6 lg:px-8 relative">
            {/* Left side: Form */}
            <div className="w-full text-center">
                <h2 className="text-6xl font-bold mb-4">{title}</h2>
                <p className="mb-6 text-xl font-semibold">{desc1}<br />{desc2}</p>
                {
                    formtype === "signup" ?
                        <SignupForm setIsLoggedIn={setIsLoggedIn} /> :
                        <LoginForm setIsLoggedIn={setIsLoggedIn} />
                }

                {/* Horizontal line */}
                <div className="mb-4">
                    {/* Sign up with Google button */}
                    <button className="bg-yellow-500 hover:bg-yellow-400 text-black text-center py-2 px-12 rounded transition duration-300">
                        Sign up with Google
                    </button>
                </div>
            </div>

            {/* Right side: Image with frame */}
            <div className="absolute top-0 right-0">
                <div className="relative">
                    <img src={frame} alt="Pattern" className="w-72 h-72 hidden" />
                    <img src={image} alt="Image" className="w-72 h-72 absolute top-1/2 transform -translate-y-1/2 right-0" />
                </div>
            </div>
        </div >
    );
}



// import frame from "../assets/frame.png"
// import SignupForm from "./SignupForm"
// import LoginForm from "./LoginForm"

// export default function Template({ title, desc1, desc2, image, formtype, setIsLoggedIn }) {
//     return (
//         <>
//             {/* TITLE */}
//             <div>
//                 <h2>{title}</h2>
//                 <p>
//                     <span>{desc1}</span> <br />
//                     <span>{desc2}</span>
//                 </p>

//                 {
//                     formtype === "signup" ?
//                         (<SignupForm setIsLoggedIn={setIsLoggedIn} />) :
//                         (<LoginForm setIsLoggedIn={setIsLoggedIn} />)
//                 }

//                 {/* horizontal line */}
//                 <div>
//                     <div></div>
//                     OR
//                     <div></div>

//                 </div>

//                 {/* button */}
//                 <button>
//                     <p>Sign up with Google</p>

//                 </button>

//                 {/* image */}
//                 <div>
//                     <img src={frame} alt="pattern" height={300} width={300} loading="lazy" />
//                     <img src={image} alt="image" height={200} width={200} loading="lazy" />
//                 </div>
//             </div>
//         </>
//     )
// }