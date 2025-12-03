import React, { useState } from "react";

export default function CounterLocal() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 bg-gray-700 rounded shadow mb-4">
      <div className="mb-4">Count: {count}</div>
      <div className="flex items-center space-x-4">
        <button
          className="px-3 py-1 bg-gray-600 text-white rounded"
          onClick={() => setCount((c) => c - 1)}
          aria-label="decrement"
        >
          -
        </button>
        {/* <div>{count}</div> */}
        <button
          className="px-3 py-1 bg-green-700 text-white rounded"
          onClick={() => setCount((c) => c + 1)}
          aria-label="increment"
        >
          +
        </button>
      </div>
    </div>
  );
}
