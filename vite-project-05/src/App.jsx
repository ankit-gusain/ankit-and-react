import { useCallback, useState } from "react";

export default function App() {
  const [length, setLength] = useState(10);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$&*_?.";

    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * str.length);
      pass += str.charAt(index);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  function handleCharAllowed() {
    setCharAllowed((prev) => !prev);
  }

  function handleSetNumberAllowed() {
    setNumberAllowed((prev) => !prev)
  }

  function handleSetLength(event) {
    setLength(parseInt(event.target.value))
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">Password Generator</h1>
      <div className="mb-4">
        <label className="block text-gray-700">Password Length:</label>
        <input
          type="number"
          className="mt-1 p-2 border rounded-md w-full"
          value={length}
          onChange={handleSetLength}
        />
      </div>
      <div className="mb-4">
        <input
          type="checkbox"
          className="mr-2"
          checked={numberAllowed}
          onChange={handleSetNumberAllowed}
        />
        <label className="text-gray-700">Include Numbers</label>
      </div>
      <div className="mb-4">
        <input
          type="checkbox"
          className="mr-2"
          checked={charAllowed}
          onChange={handleCharAllowed}
        />
        <label className="text-gray-700">Include Special Characters</label>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={generatePassword}
      >
        Generate Password
      </button>
      {password && <p className="mt-4">Your Password: {password}</p>}
    </div>
  );
}
