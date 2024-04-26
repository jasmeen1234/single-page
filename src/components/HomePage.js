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
    <div className="w-8/10 h-screen flex flex-wrap">
      
        <div className="w-1/2 h-9/20 bg-blue-200 flex justify-center items-center overflow-hidden">
          <Counter count={count} handleRangeChange={handleRangeChange} />
        </div>
        <div className="w-1/2 h-9/20  flex justify-center items-center overflow-hidden">
          <RichText formData={formData} />
        </div>
     
      
        <div className="w-1/2 h-9/20 flex justify-center items-center overflow-hidden">
          <UserForm />
        </div>
        <div className="w-1/2 h-9/20 flex justify-center items-center overflow-hidden">
          <UserFormDisplay />
        </div>
        <div className="w-full h-1/10 ">
        <ColorRang   count={count} handleRangeChange={handleRangeChange} />
        </div>
    </div>
  );
}

export default HomePage;
