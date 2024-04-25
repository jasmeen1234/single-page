import React from 'react';

const Counter = ({ count, handleRangeChange }) => {
  const increment = () => {
    handleRangeChange(count + 1);
  };

  const decrement = () => {
    handleRangeChange(count - 1);
  };

  const reset = () => {
    handleRangeChange(0);
  };

  const calculateBackgroundColor = () => {
    const hue = count * 10; // Adjust the multiplier to change color transition speed
    return `hsl(${hue}, 100%, 50%)`;
  };

  return (
    <div
      className="relative flex flex-col items-center bg-white rounded-lg p-5 w-full md:w-650px h-740px"
      style={{ backgroundColor: calculateBackgroundColor() }}
    >
      <h1 className="text-center text-2xl">Count: {count}</h1>
      <div className="flex flex-wrap justify-center mt-8 space-x-8">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white rounded-none px-4 py-2"
          onClick={increment}
        >
          +
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white rounded-none px-4 py-2"
          onClick={reset}
        >
          Reset
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white rounded-none px-4 py-2"
          onClick={decrement}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
