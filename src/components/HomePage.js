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
    <div className="flex justify-center flex-col px-4 py-8">
    {/* Counter and RichText Section */}
    <div className="w-full md:w-1/2 pr-4 flex flex-row gap-4 mb-8">
      {/* Counter Component */}
      <div className="flex-1">
        <Counter count={count} handleRangeChange={handleRangeChange} />
      </div>

      {/* RichText Component */}
      <div className="flex-1">
        <RichText formData={formData} />
      </div>
    </div>

    {/* UserForm and UserFormDisplay Section */}
    <div className="w-full md:w-1/2 pl-4 mb-8">
      {/* UserForm Component */}
      <div className="mb-4">
        <UserForm />
      </div>

      {/* UserFormDisplay Component */}
      <div className="mb-4">
        <UserFormDisplay />
      </div>
    </div>

    {/* ColorRang Component */}
    <ColorRang count={count} handleRangeChange={handleRangeChange} />
  </div>
  );
}

export default HomePage;
