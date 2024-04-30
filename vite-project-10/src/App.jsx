import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./page/Home";
import About from "./page/About";
import Login from "./page/Login";
import Signup from "./page/Singup";
import Contact from "./page/Contact"
import Dashboard from "./page/Dashboard";
import { useState } from "react";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/About" element={<About />} > </Route>
        <Route path="/Contact" element={<Contact />} > </Route>

        <Route path="/Login" element={<Login setIsLoggedIn={setIsLoggedIn} />}></Route>

        <Route path="/Dashboard" element={<Dashboard />}></Route>
        <Route path="/Signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />}></Route>
      </Routes>
    </>
  )
}