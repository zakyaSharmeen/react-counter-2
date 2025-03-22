import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">Counter App</h1>
        <h2 className="text-xl mb-4">Count: {count}</h2>
        <div className="space-x-2">
          <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 bg-green-500 text-white rounded-md"
          >
            Increment
          </button>
          <button
            onClick={() => setCount(count - 1)}
            className="px-4 py-2 bg-red-500 text-white rounded-md"
          >
            Decrement
          </button>
          <button
            onClick={() => setCount(0)}
            className="px-4 py-2 bg-gray-500 text-white rounded-md"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
