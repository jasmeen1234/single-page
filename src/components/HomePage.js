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
    <div className="w-full bg-blue-200 flex justify-center flex-col px-4 py-8">
   
    <div className="w-full md:w-1/2 pr-4 flex flex-row gap-40 mb-8">
     
      <div className="flex-1 text-4xl">
        <Counter count={count} handleRangeChange={handleRangeChange} />
      </div>

  
      <div className="flex-1">
        <RichText formData={formData} />
      </div>
    </div>
    <div className="w-full md:w-1/2 pl-4 mb-8 flex justify-center flex-row  gap-40">
      <div className="mb-4 md:w-1/2 bg-white">
        <UserForm />
      </div>
      <div className="mb-4 md:w-1/2 bg-white">
        <UserFormDisplay />
      </div>
    </div>
    <ColorRang count={count} handleRangeChange={handleRangeChange} />
  </div>
  );
}

export default HomePage;
