import React, { useState } from 'react';
import Counter from './Counter';
import RichText from './RichText';
import UserForm from './UserForm';
import UserFormDisplay from './UserFormDisplay';
import ColorRang from './ColorRang';

function HomePage() {
  const [count, setCount] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: ''
  });

  const handleRangeChange = (value) => {
    setCount(value);
  };

  return (
    <div className="w-full h-screen flex flex-wrap overflow-hidden">
      
        <div className="w-3/5 h-1/2 bg-blue-200 flex justify-center items-center overflow-hidden">
          <Counter count={count} handleRangeChange={handleRangeChange} />
        </div>
        <div className="w-2/5 h-1/2 bg-pink-200 flex justify-center items-center overflow-hidden">
          <RichText formData={formData} />
        </div>
     
      
        <div className="w-2/5 h-1/2 bg-green-200 flex justify-center items-center overflow-hidden">
          <UserForm />
        </div>
        <div className="w-2/5 h-1/2 bg-yellow-200 flex justify-center items-center overflow-hidden">
          <UserFormDisplay />
        </div>
        <ColorRang  className="flex justify-center items-center" count={count} handleRangeChange={handleRangeChange} />
    </div>
  );
}

export default HomePage;
