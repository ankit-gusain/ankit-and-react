import { useState } from "react";
import Data from "./components/Data";
import Tours from "./components/Tours";
import TourList from "./components/Head";

export default function App() {
  const [tours, setTours] = useState(Data);

  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  if (tours.length === 0) {
    return (
      <>

        <div className="flex flex-col items-center justify-center h-screen">
          <h2 className="text-2xl font-semibold mb-4">No tours left</h2>
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600" onClick={() => setTours(Data)}        >
            Tap to reload
          </button>
        </div>
      </>
    );
  }

  return (
    <div className="container mx-auto">
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
}
