import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(prevCount => prevCount + 1);
    }
    const decrement = () => {
        setCount(prevCount => prevCount - 1);
    }
    const reset = () => {
        setCount(0)
    }
    const calculateBackgroundColor = () => {
        const hue = count * 10; // Adjust the multiplier to change color transition speed
        return `hsl(${hue}, 100%, 50%)`;
    };

    return (
        <div style={{ backgroundColor: calculateBackgroundColor(), minHeight: '50vh', minWidth: '60%', transition: 'background-color 0.5s linear' }}>
            <h1>Count is: {count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={reset}>Reset</button>
            <button onClick={decrement}>-</button>

            {/* Pass count state and setCount function to ColorRange component */}
            <ColorRange count={count} setCount={setCount} />
        </div>
    );
}

const ColorRange = ({ count, setCount }) => {
    // Handle range input change
    const handleRangeChange = (e) => {
        setCount(parseInt(e.target.value)); // Update count value based on range input
    };

    return (
        <div>
            <input
                type="range"
                min="0"
                max="100"
                value={count}
                onChange={handleRangeChange}
            />
        </div>
    );
}

export default Counter;
