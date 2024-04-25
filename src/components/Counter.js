import React,{useState} from 'react'

const Counter = () => {
    const[count, setCount]=useState(0);
    const increment=()=>{
        setCount(prevCount => prevCount + 1);
    }
    const decrement=()=>{
        setCount(prevCount => prevCount - 1);
    }
    const reset=()=>{
     setCount(0)
    }
    const calculateBackgroundColor = () => {
        const hue = count * 10; // Adjust the multiplier to change color transition speed
        return `hsl(${hue}, 100%, 50%)`;
      };
  return (
    <div style={{ backgroundColor: calculateBackgroundColor(), minHeight: '100vh', transition: 'background-color 0.5s linear' }}>
        <h1>Count is :{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrement}>-</button>
      
    </div>
  )
}

export default Counter
