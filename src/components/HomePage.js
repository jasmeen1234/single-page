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
    <div className="flex justify-center  flex-column px-4 py-8">
     
      <div className="w-1/2 h-1/2 pr-4 flex flex-row">
        <Counter count={count} handleRangeChange={handleRangeChange} />
        <RichText formData={formData} />
      </div>

     
      <div className="w-1/2 pl-4">
        <div className="mb-8">
          <UserForm />
        </div>
        <div className="mb-8">
          <UserFormDisplay />
        </div>
      </div>

    
      <ColorRang count={count} handleRangeChange={handleRangeChange} />
    </div>
  );
}

export default HomePage;
