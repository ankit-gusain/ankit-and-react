import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      if (!response.ok) {
        throw new Error("Failed to fetch quote");
      }
      const data = await response.json();
      setQuote(data.content);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-black ">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
      <p className="text-lg mb-8">Explore and discover something amazing!</p>
      <div className=" rounded-lg p-6   text-center">
        <h2 className="text-xl font-semibold mb-4">Today's Inspiration:</h2>
        <blockquote className="italic text-gray-800">{quote}</blockquote>
        <button
          className="mt-4 px-4 py-2 bg-indigo-500 text-white font-semibold rounded hover:bg-indigo-600 transition-colors"
          onClick={fetchQuote}
        >
          Get New Quote
        </button>
      </div>
      <div className="mt-8">
        <Link
          to="/about"
          className="text-lg text-white underline hover:text-gray-200"
        >
          Learn more about us
        </Link>
      </div>
    </div>
  );
}
