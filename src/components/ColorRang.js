import React from 'react';

const ColorRang = ({ count, handleRangeChange }) => {
  const calculateBackgroundColor = () => {
    const hue = count * 10; // Adjust the multiplier to change color transition speed
    return `hsl(${hue}, 100%, 50%)`;
  };

  return (
    <div style={{ backgroundColor: calculateBackgroundColor(), minHeight: '10vh', minWidth: '10vw', transition: 'background-color 0.5s linear' }}>
      <input
        type="range"
        min="0"
        max="100"
        value={count}
        onChange={(e) => handleRangeChange(parseInt(e.target.value))}
      />
    </div>
  );
};

export default ColorRang;
