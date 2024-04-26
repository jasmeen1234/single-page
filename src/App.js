import React, { useState } from 'react';
import './App.css';
import {     BrowserRouter as Router,
   Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import Login from './Login';


function App() {
  const [count, setCount] = useState(0);
 
  
 

  return (
    <Router>
         <div className="App">
         <Routes>
          <Route path='/' element={<><Login /></>} />
          <Route path='/homepage' element={<><HomePage /></>} />
          </Routes>
          </div>
        </Router>
  );
}

export default App;
