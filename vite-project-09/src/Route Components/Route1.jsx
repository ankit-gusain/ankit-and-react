import { Route, Routes } from "react-router-dom"
function Route1() {
    return (
        <>
            <div className="text-center font-bold text-cyan-700"> Root type 1</div>
            <Routes>
                <Route path="/" element={<div>Home</div>} />
                <Route path="/a" element={<div>A page</div>} />
                <Route path="/b" element={<div>B page</div>} />
                <Route path="/c" element={<div>C page</div>} />
            </Routes>

        </>
    )
}

export default Route1