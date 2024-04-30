import { useState } from "react";

function App() {
  let [color, setColor] = useState("purple");

  return (
    <>
      {/* <div className={`w-full h-screen duration-200 bg-${color}`}>*/}
      
      <div className="w-full h-screen duration-200 flex flex-col items-center justify-center" style={{ backgroundColor: color }}>
        <p className="text-lg text-white font-bold pt-10 mt-10 text-center">Click To Change Color</p>

        <div className="flex flex-wrap justify-center gap-4 mt-5">
          <button onClick={() => setColor("red")} className="color-btn bg-red-700 text-red-950 rounded-3xl px-4 py-1 border-2 hover:bg-red-600">Red</button>
          <button onClick={() => setColor("green")} className="color-btn bg-green-500 text-green-950 rounded-3xl px-4 py-1 border-2 hover:bg-green-400">Green</button>
          <button onClick={() => setColor("yellow")} className="color-btn bg-yellow-400 text-blue-950 rounded-3xl px-4 py-1 border-2 hover:bg-yellow-300">Yellow</button>
          <button onClick={() => setColor("black")} className="color-btn bg-black text-white rounded-3xl px-4 py-1 border-2 hover:bg-gray-900">Black</button>
          <button onClick={() => setColor("white")} className="color-btn bg-white text-red-950 rounded-3xl px-4 py-1 border-2 hover:bg-gray-300">White</button>
          <button onClick={() => setColor("blue")} className="color-btn bg-blue-600 text-white rounded-3xl px-4 py-1 border-2 hover:bg-blue-500">Blue</button>
          <button onClick={() => setColor("pink")} className="color-btn bg-pink-500 text-black rounded-3xl px-4 py-1 border-2 hover:bg-pink-400">Pink</button>
        </div>
      </div>
    </>
  );
}

export default App;
