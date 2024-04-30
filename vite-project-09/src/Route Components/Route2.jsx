import About from "./About"
import Home from "./Home"
import Contact from "./Contact"
import { Route, Routes } from "react-router-dom"
import { Link } from "react-router-dom"


export default function Route2() {
    return (
        <>
            <div>
                <ul>
                    <li> <Link to="/home"> Home </Link> </li>
                    <li> <Link to="/about"> About </Link> </li>
                    <li> <Link to="/contact">Contact </Link> </li>
                </ul>
            </div>


            <Routes>
                <Route path="/Home" element={<Home />}> </Route>
                <Route path="/about" element={<About />}> </Route>
                <Route path="/Contact" element={<Contact />}> </Route>
            </Routes >

        </>
    )
}